export interface InputValidations {
  firstname: Validation
  lastname: Validation
  middlename: Validation
  phone: Validation
  email: Validation
  city: Validation
  pan: Validation
  expireDate: Validation
  cvv: Validation
  otpCode: Validation
}

interface Validation {
  required: { value: boolean; message: string }
  maxLength: { value: number; message: string }
  minLength?: { value: number; message: string }
  pattern?: { value: RegExp; message: string }
}

export const validations: InputValidations = {
  firstname: {
    required: { value: true, message: 'Заполните поле' },
    maxLength: { value: 30, message: 'Длина от 2 до 30' },
    minLength: { value: 2, message: 'Длина от 2 до 30' },
    pattern: { value: /^[A-Za-z]+$/i, message: 'Некорректное имя' }
  },
  lastname: {
    required: { value: true, message: 'Заполните поле' },
    maxLength: { value: 30, message: 'Длина от 2 до 30' },
    minLength: { value: 2, message: 'Длина от 2 до 30' },
    pattern: { value: /^[A-Za-z]+$/i, message: 'Некорректное фамилия' }
  },
  middlename: {
    required: { value: false, message: '' },
    maxLength: { value: 30, message: 'Длина от 2 до 30' },
    minLength: { value: 2, message: 'Длина от 2 до 30' },
    pattern: { value: /^[A-Za-z]+$/i, message: 'Некорректное отчество' }
  },
  phone: {
    required: { value: true, message: 'Заполните поле' },
    maxLength: { value: 11, message: 'Длина 11' },
    pattern: { value: /^8[0-9]{10}$/i, message: 'Некорректный телефон' }
  },
  email: {
    required: { value: false, message: '' },
    maxLength: { value: 20, message: 'длина 20' }
  },
  city: {
    required: { value: false, message: '' },
    maxLength: { value: 20, message: 'длина 20' }
  },
  pan: {
    required: { value: true, message: 'Заполните поле' },
    maxLength: { value: 9, message: 'Длина 9' },
    pattern: { value: /^[0-9]{4}\s[0-9]{4}$/i, message: 'Некорректный номер' }
  },
  expireDate: {
    required: { value: true, message: 'Заполните поле' },
    maxLength: { value: 5, message: 'Длина 5' },
    pattern: { value: /^[0-9]{2}\/[0-9]{2}$/i, message: 'Некорректный срок' }
  },
  cvv: {
    required: { value: true, message: 'Заполните поле' },
    maxLength: { value: 4, message: 'Длина 4' },
    pattern: { value: /^[0-9]{3}$/i, message: 'Некорректный cvv' }
  },
  otpCode: {
    required: { value: true, message: 'Заполните поле' },
    maxLength: { value: 6, message: 'Длина 6' },
    pattern: { value: /^[0-9]{6}$/i, message: 'Некорректный код' }
  }
}
