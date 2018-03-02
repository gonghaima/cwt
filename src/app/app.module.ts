import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataServiceService } from './services/data-service.service';
import { ConfigServiceService } from './services/config-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataServiceService, ConfigServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
