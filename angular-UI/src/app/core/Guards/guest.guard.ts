import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../Services/Api/Auth/auth.service";
import {map, of, switchMap} from "rxjs";

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authSer = inject(AuthService);

  return authSer.userAuthorizationStatus.pipe(
    switchMap(authStatus => {
      if (authStatus == 'guest') {
        return of(true)
      } else if (authStatus == 'auth') {
        router.navigateByUrl('/home');
        return of(false)
      } else {
        return authSer.checkAuth().pipe(
          map(authStatus => {
            if (authStatus == 'guest') {
              authSer.userAuthorizationStatus.next('guest');
              return true;
            } else {
              router.navigateByUrl('/home');
              authSer.userAuthorizationStatus.next('auth');
              return false;
            }
          })
        );
      }
    })
  );
};

















// import {CanActivateFn, Router} from '@angular/router';
// import {inject} from "@angular/core";
// import {AuthService} from "../Services/Api/Auth/auth.service";
// import {map} from "rxjs";
//
// export const guestGuard: CanActivateFn = (route, state) => {
//   const router = inject(Router);
//   return inject(AuthService).checkAuth().pipe(
//     map(authorized => {
//       if (authorized == 'guest') {
//         return true;
//       } else {
//         router.navigateByUrl('/home');
//         return false;
//       }
//     })
//   );
// };
