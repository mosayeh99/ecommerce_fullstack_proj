export interface UserForRegistrationVM {
  name: string,
  email: string,
  gender: 0 | 1,
  birthdate: Date,
  password: string,
  password_confirmation: string,
}
