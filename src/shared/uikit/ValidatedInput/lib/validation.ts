import { InputValidations } from './types'

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
    minLength: { value: 11, message: 'Длина 11' },
    pattern: { value: /^8[0-9]{10}$/i, message: 'Некорректный телефон' }
  }
}
