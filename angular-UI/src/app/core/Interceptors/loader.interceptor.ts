import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoaderService} from "../Services/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderSer: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderSer.isLoading.next(true);

    return next.handle(request).pipe(
      finalize(() => {
        this.loaderSer.isLoading.next(false);
      })
    );
  }
}
