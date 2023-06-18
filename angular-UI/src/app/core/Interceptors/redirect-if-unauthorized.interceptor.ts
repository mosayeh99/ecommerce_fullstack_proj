import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Router} from "@angular/router";
import {AuthService} from "../Services/Api/Auth/auth.service";

@Injectable()
export class RedirectIfUnauthorizedInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authSer: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        error: err => {
          if (err.status == 401) {
            this.authSer.userAuthorizationStatus.next('guest');
            this.router.navigate(['/user/login']);
          }
        }
      })
    );
  }
}
