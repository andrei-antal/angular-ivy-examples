import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { VolumeComponent } from './volume/volume.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, VolumeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
