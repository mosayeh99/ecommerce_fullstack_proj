import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../core/Services/Api/Auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  emailSent: boolean = false;

  constructor(private fb: FormBuilder, private authSer: AuthService, private snackBar: MatSnackBar) {
  }

  forgetPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  get email() {
    return this.forgetPasswordForm.controls.email;
  }

  onSubmit() {
    this.authSer.forgetPassword(this.forgetPasswordForm.value).subscribe({
      next: () => {
        this.snackBar.open('Reset link has been sent, Check your Emails.', '✖');
        this.emailSent = true;
      },
      error: () => this.email.setErrors({notFound: true})
    })
  }

}
