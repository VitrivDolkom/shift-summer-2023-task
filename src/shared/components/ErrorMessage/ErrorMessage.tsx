interface ErrorMessageProps {
  message?: string
}
export const ErrorMessage = ({ message }: ErrorMessageProps) => <div>{message || ''}</div>
