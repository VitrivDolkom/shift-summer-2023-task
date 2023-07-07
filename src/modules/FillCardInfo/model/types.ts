export interface CardInfoState {
  debitCard: CardInfo
}

export interface CardInfo {
  pan: string
  expireDate: string
  cvv: string
}