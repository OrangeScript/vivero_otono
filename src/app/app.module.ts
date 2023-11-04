import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ViveroMainModule } from './vivero-main/vivero-main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ViveroMainModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
