import logo from '../img/logo.png'
import s from '../styles.module.css'

export const HeaderLogo = () => (
  <div className={s.logo}>
    <img src={logo} alt="логотип" />
  </div>
)
