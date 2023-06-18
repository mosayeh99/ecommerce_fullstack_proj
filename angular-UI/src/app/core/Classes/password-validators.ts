import {AbstractControl} from "@angular/forms";

export class PasswordValidators {
  static matchValidator(control: AbstractControl) {
    if(!control.get('confirm_password')!.value) {
      control.get("confirm_password")!.setErrors({required: true});
    } else if (control.get('password')!.value !== control.get('confirm_password')!.value) {
      control.get("confirm_password")!.setErrors({mismatch: true});
    }
  }

  static passwordValidator(control: AbstractControl) {

    let password = control.get('password')!.value;

    if (!password) {
      control.get('password')!.setErrors({required: true})
    }else if (!/[A-Z]+/.test(password)) {
      control.get('password')!.setErrors({uppercase: true})
    } else if (!/[a-z]+/.test(password)) {
      control.get('password')!.setErrors({lowercase: true})
    } else if (!/[0-9]+/.test(password)) {
      control.get('password')!.setErrors({numeric: true})
    } else if (!/[$@^!%*?&]+/.test(password)) {
      control.get('password')!.setErrors({special: true})
    } else if (password.length < 8) {
      control.get('password')!.setErrors({minLength: true})
    }

  }
}
