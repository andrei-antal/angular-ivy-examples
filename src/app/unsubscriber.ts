import { Subscription } from 'rxjs';

export function Unsubscriber() {
  return (cmpType) => {
    console.log('in decorator');
    const origFactory = cmpType.ɵfac;
    cmpType.ɵfac = (...args) => {
      const cmp = origFactory(...args);
      cmpType.ɵcmp.onDestroy = () => {
        if (cmp.ngOnDestroy) {
          cmp.ngOnDestroy();
        }
        console.log('HOC on destroy');
        Object.keys(cmp).forEach((prop) => {
          if (prop && cmp[prop] && cmp[prop] instanceof Subscription) {
            cmp[prop].unsubscribe();
          }
        });
      };
      return cmp;
    };
    return cmpType;
  };
}
