import s from './styles.module.css'

interface TitleWithInfoProps {
  title: string
  info: string
}

export const TitleWithInfo = ({title, info}: TitleWithInfoProps) => (
  <div className={s.wrapper}>
    <div className={s.title}>{title}</div>
    <div className={s.info}>{info}</div>
  </div>
)
