import axios from 'axios'

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/cinema`,
  headers: {
    'Content-type': 'application/json'
  }
})

export const authInstance = axios.create({
  ...instance.defaults,
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/auth`
})

export const usersInstance = axios.create({
  ...instance.defaults,
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/users`
})
