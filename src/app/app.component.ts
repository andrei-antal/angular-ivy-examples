import { VolumeComponent } from './volume/volume.component';
import {
  Component,
  OnInit,
  ɵrenderComponent,
  ɵɵdirectiveInject,
  INJECTOR,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Turn up the volume, v9 style';
  condition = true;
  constructor() {}

  ngOnInit() {
    const injector = ɵɵdirectiveInject(INJECTOR);
    const comp = ɵrenderComponent(VolumeComponent, {
      host: 'volume',
      injector,
    });
    console.log(comp);
  }
}
