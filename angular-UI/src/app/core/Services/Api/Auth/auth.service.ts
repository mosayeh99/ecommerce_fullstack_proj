import {Injectable} from '@angular/core';
import {BehaviorSubject, mergeMap, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {UserForResetPasswordVM} from "../../../ViewModels/user-for-reset-password-vm";
import {Router} from "@angular/router";
import {UserForLoginVM} from "../../../ViewModels/user-for-login-vm";
import {UserForRegistrationVM} from "../../../ViewModels/user-for-registration-vm";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAuthorizationStatus: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private router: Router) {
  }

  // ------------Check User Authorized Or Not--------------
  checkAuth() {
    return this.http.get<string>(environment.webUrl + '/check-auth');
  }

  // ------------Login Methods-------------
  getCookie(): Observable<any> {
    return this.http.get(environment.webUrl + '/sanctum/csrf-cookie');
  }

  login(body: UserForLoginVM): Observable<any> {
    return this.getCookie().pipe(
      mergeMap(() => {
        return this.http.post(environment.webUrl + '/login', body)
      })
    )
  }

  redirectAfterLogin(url: string | null) {
    if (url) {
      this.router.navigateByUrl(url)
        .catch(() => this.router.navigateByUrl('/home'))
    } else {
      this.router.navigateByUrl('/home')
    }
  }

  // ------------Logout Method-------------
  logout() {
    return this.http.post(environment.webUrl + '/logout', null);
  }

  // ------------Register Methods-------------
  register(body: UserForRegistrationVM) {
    return this.http.post(environment.webUrl + '/register', body);
  }

  // ------------Forget Password--------------
  forgetPassword(body: object) {
    return this.http.post(environment.webUrl + '/forgot-password', body);
  }

  // ------------Reset Password---------------
  resetPassword(body: UserForResetPasswordVM) {
    return this.http.post(environment.webUrl + '/reset-password', body);
  }

}


























// import {Injectable} from '@angular/core';
// import {mergeMap, Observable} from "rxjs";
// import {HttpClient} from "@angular/common/http";
// import {environment} from "../../../../../environments/environment";
// import {UserForResetPasswordVM} from "../../../ViewModels/user-for-reset-password-vm";
// import {Router} from "@angular/router";
// import {UserForLoginVM} from "../../../ViewModels/user-for-login-vm";
// import {UserForRegistrationVM} from "../../../ViewModels/user-for-registration-vm";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//
//   constructor(private http: HttpClient, private router: Router) {
//   }
//
//   // ------------Check User Authorized Or Not--------------
//   checkAuth(): Observable<string> {
//     return this.http.get<string>(environment.webUrl + '/checkAuth');
//   }
//
//   // ------------Login Methods-------------
//   getCookie(): Observable<any> {
//     return this.http.get(environment.webUrl + '/sanctum/csrf-cookie');
//   }
//
//   login(body: UserForLoginVM): Observable<any> {
//     return this.getCookie().pipe(
//       mergeMap(() => {
//         return this.http.post(environment.webUrl + '/login', body)
//       })
//     )
//   }
//
//   redirectAfterLogin(url: string | null) {
//     if (url) {
//       this.router.navigateByUrl(url)
//         .catch(() => this.router.navigateByUrl('/home'))
//     } else {
//       this.router.navigateByUrl('/home')
//     }
//   }
//
//   // ------------Logout Method-------------
//   logout() {
//     return this.http.post(environment.webUrl + '/logout', null);
//   }
//
//   // ------------Register Methods-------------
//   register(body: UserForRegistrationVM) {
//     return this.http.post(environment.webUrl + '/register', body);
//   }
//
//   // ------------Forget Password--------------
//   forgetPassword(body: object) {
//     return this.http.post(environment.webUrl + '/forgot-password', body);
//   }
//
//   // ------------Reset Password---------------
//   resetPassword(body: UserForResetPasswordVM) {
//     return this.http.post(environment.webUrl + '/reset-password', body);
//   }
//
// }
