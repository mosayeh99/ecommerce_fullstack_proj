import {Component} from '@angular/core';
import {AbstractControlOptions, FormBuilder, Validators} from "@angular/forms";
import {PasswordValidators} from "../../../core/Classes/password-validators";
import {UserForRegistrationVM} from "../../../core/ViewModels/user-for-registration-vm";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/Services/Api/Auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  minDate: Date;
  maxDate: Date;
  startDate = new Date(1999, 7, 27);

  constructor(private fb: FormBuilder, private authSer: AuthService, private router: Router) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date();
  }

  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    passwords: this.fb.group({
      password: [''],
      confirm_password: [''],
    }, {validator: [PasswordValidators.matchValidator, PasswordValidators.passwordValidator]} as AbstractControlOptions)
  })

  get name() {
    return this.registerForm.controls.name
  }

  get email() {
    return this.registerForm.controls.email
  }

  get gender() {
    return this.registerForm.controls.gender
  }

  get birthdate() {
    return this.registerForm.controls.birthdate
  }

  get password() {
    return this.registerForm.controls.passwords.get('password')
  }

  get confirmPassword() {
    return this.registerForm.controls.passwords.get('confirm_password')
  }

  onSubmit = (formValue: any) => {
    const user: UserForRegistrationVM = {
      name: formValue.name,
      email: formValue.email,
      gender: formValue.gender,
      birthdate: formValue.birthdate,
      password: formValue.passwords.password,
      password_confirmation: formValue.passwords.confirm_password,
    };
    this.authSer.register(user).subscribe({
      next: () => this.router.navigateByUrl('/home'),
      error: () => this.email.setErrors({emailExist: true})
    })
  }
}
