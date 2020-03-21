import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ImagesComponent} from './images/images.component';
import {UnknownRouteComponent} from './unknown-route/unknown-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagesComponent,
    UnknownRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
