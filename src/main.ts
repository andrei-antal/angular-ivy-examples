import { enableProdMode, ɵcompileComponent } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// comment this out
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: 'noop' })
  .catch((err) => console.error(err));

// add this
//ɵrenderComponent(VolumeComponent, { host: 'app-root' });
