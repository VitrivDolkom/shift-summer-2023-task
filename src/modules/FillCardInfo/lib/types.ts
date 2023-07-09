export interface CardInfo {
  pan: string
  expireDate: string
  cvv: string
}

export interface FillCardInfoProps {
  onSubmit: (cardInfo: CardInfo) => void
}
