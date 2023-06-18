import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RequestOptionsInterceptor implements HttpInterceptor {

  constructor(@Inject(LOCALE_ID) public locale: string) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true
    })
    request = request.clone({
      setHeaders: {
        "content-Type": "application/json",
        "accept": "application/json",
        //'Accept-Language': this.locale ? this.locale : 'en',
      }
    });
    return next.handle(request);
  }
}
