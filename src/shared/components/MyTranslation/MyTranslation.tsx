import { Translation } from 'react-i18next'

export const MyTranslation = ({ children }: { children: JSX.Element }) => (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  <Translation>{(t) => children}</Translation>
)
