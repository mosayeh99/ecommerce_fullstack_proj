import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RequestOptionsInterceptor} from "./core/Interceptors/request-options.interceptor";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {LoaderInterceptor} from "./core/Interceptors/loader.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RedirectIfUnauthorizedInterceptor} from "./core/Interceptors/redirect-if-unauthorized.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: RedirectIfUnauthorizedInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: RequestOptionsInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
