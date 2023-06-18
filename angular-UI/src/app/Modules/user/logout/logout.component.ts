import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../core/Services/Api/Auth/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authSer: AuthService, private router: Router) {
    authSer.logout().subscribe({
      next: () => {
        this.authSer.userAuthorizationStatus.next('guest');
        this.router.navigate(['/user/login']);
      },
      error: err => console.log(err)
    })
  }

}
