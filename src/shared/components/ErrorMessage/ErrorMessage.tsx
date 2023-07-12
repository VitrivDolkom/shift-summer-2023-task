import s from './styles.module.css'

interface ErrorMessageProps {
  message?: string
}
export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className={s.message}>{message || ''}</div>
)
