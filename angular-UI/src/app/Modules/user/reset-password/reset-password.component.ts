import { Component } from '@angular/core';
import {AbstractControlOptions, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../core/Services/Api/Auth/auth.service";
import {PasswordValidators} from "../../../core/Classes/password-validators";
import {UserForResetPasswordVM} from "../../../core/ViewModels/user-for-reset-password-vm";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  serverMsgError: string | null = null;

  constructor(private fb: FormBuilder, private authSer: AuthService, private activeRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) {
  }

  resetPasswordForm = this.fb.group({
    passwords: this.fb.group({
      password: [''],
      confirm_password: [''],
    }, {validator: [PasswordValidators.matchValidator, PasswordValidators.passwordValidator]} as AbstractControlOptions)
  });

  get password() {
    return this.resetPasswordForm.controls.passwords.get('password')
  }

  get confirmPassword() {
    return this.resetPasswordForm.controls.passwords.get('confirm_password')
  }

  onSubmit(formValues: any) {
    const user: UserForResetPasswordVM = {
      token: this.activeRoute.snapshot.params['token'],
      email: this.activeRoute.snapshot.queryParams['email'],
      password: formValues.passwords.password,
      password_confirmation: formValues.passwords.confirm_password
    }
    this.authSer.resetPassword(user).subscribe({
      next: () => {
        this.router.navigateByUrl('/user/login');
        this.snackBar.open('Your password has been reset successfully.', '✖')
      },
      error: err => this.serverMsgError = err.error.message
    })
  }

}
