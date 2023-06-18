import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {UserForLoginVM} from "../../../core/ViewModels/user-for-login-vm";
import {AuthService} from "../../../core/Services/Api/Auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide: boolean = true;
  serverMsgError: string | null = null;

  constructor(private fb: FormBuilder, private authSer: AuthService, private activeRoute: ActivatedRoute) {
  }

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
  })

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  onSubmit(formValue: any) {
    const user: UserForLoginVM = {
      email: formValue.email,
      password: formValue.password
    }

    this.authSer.login(user).subscribe({
      next: () => {
        this.authSer.userAuthorizationStatus.next('auth');
        this.authSer.redirectAfterLogin(this.activeRoute.snapshot.queryParams['redirectUrl']);
      },
      error: err => this.serverMsgError = err.error.message
    });
  }
}
