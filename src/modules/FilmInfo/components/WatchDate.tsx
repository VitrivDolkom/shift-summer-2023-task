import s from '../ui/styles.module.css'

interface Props {
  date?: string
}

export const WatchDate = ({ date }: Props) => (
  <>
    <div className={s.inBox}>в прокате</div>
    <div className={s.watchDate}>{date || 'с 1 июня по 15 июля'}</div>
  </>
)
