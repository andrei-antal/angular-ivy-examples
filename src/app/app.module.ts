import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VolumeComponent } from './volume/volume.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, VolumeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
