export interface InputValidations {
  firstname: Validation
  lastname: Validation
  middlename: Validation
  phone: Validation
  pan: Validation
  expireDate: Validation
  cvv: Validation
  otpCode: Validation
}

interface Validation {
  required: { value: boolean; message: string }
  maxLength: { value: number; message: string }
  minLength?: { value: number; message: string }
  pattern: { value: RegExp; message: string }
}

export interface ValidatedInputProps<T> {
  name: string
  error?: string | undefined
  register: T
}