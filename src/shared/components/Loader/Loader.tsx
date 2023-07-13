import { Typography } from '@/shared/uikit'

interface LoaderProps {
  message?: string
  img?: string
  wrapperClassName?: string
}

export const Loader = ({ img, message, wrapperClassName = '' }: LoaderProps) => (
  <div className={wrapperClassName}>
    {!!img && <img src={img} alt="" />}
    {!!message && <Typography tag="span" variant="t1" text={message} />}
  </div>
)
