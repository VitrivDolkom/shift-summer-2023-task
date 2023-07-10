export interface AuthInfo {
  phone: string
  code: number
}

export interface AuthInfoState {
  authInfo?: AuthInfo
}
