import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../Services/Api/Auth/auth.service";
import {map, of, switchMap} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authSer = inject(AuthService);

  return authSer.userAuthorizationStatus.pipe(
    switchMap(authStatus => {
      if (authStatus == 'auth') {
        return of(true)
      } else if (authStatus == 'guest') {
        router.navigate(['/user/login'], {queryParams: {'redirectUrl': state.url}});
        return of(false)
      } else {
        return authSer.checkAuth().pipe(
          map(authStatus => {
            if (authStatus == 'auth') {
              authSer.userAuthorizationStatus.next('auth');
              return true;
            } else {
              router.navigate(['/user/login'], {queryParams: {'redirectUrl': state.url}});
              authSer.userAuthorizationStatus.next('guest');
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
// export const authGuard: CanActivateFn = (route, state) => {
//   const router = inject(Router);
//
//   return inject(AuthService).checkAuth().pipe(
//     map(authorized => {
//       if (authorized == 'auth') {
//         return true;
//       } else {
//         router.navigate(['/user/login'], {queryParams: {'redirectUrl': state.url}});
//         return false;
//       }
//     })
//   );
// };
