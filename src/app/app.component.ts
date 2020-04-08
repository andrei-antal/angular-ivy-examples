import { VolumeComponent } from './volume/volume.component';
import {
  Component,
  OnInit,
  ɵrenderComponent,
  ɵɵdirectiveInject,
  INJECTOR,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  Injector,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Turn up the volume, v9 style';
  condition = true;
  @ViewChild('vol', { read: ViewContainerRef }) vol: ViewContainerRef;
  constructor(
    // private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngOnInit() {
    // const injector = ɵɵdirectiveInject(INJECTOR);
    // const comp = ɵrenderComponent(VolumeComponent, {
    //   host: 'volume',
    //   injector,
    // });
    // console.log(comp);
  }

  changeTitle() {
    // ɵmarkDirty(this);
    this.title = 'New title';
    // ɵdetectChanges(this);
  }

  async loadComponent() {
    const { VolumeComponent: component } = await import(
      './volume/volume.component'
    );
    // const factory = this.cfr.resolveComponentFactory(component);
    // const comp = this.vol.createComponent(factory, 0, this.injector);
    // comp.changeDetectorRef.detectChanges();
    ɵrenderComponent(component, {
      host: this.vol.element.nativeElement,
      injector: this.injector,
    });
  }
}
