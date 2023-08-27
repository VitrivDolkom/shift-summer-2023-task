import { Link } from 'react-router-dom'

import logo from '@/assets/img/logo.png'

import s from '../ui/styles.module.css'

export const HeaderLogo = () => (
  <Link to="/poster">
    <div className={s.logo}>
      <img src={logo} alt="логотип" />
    </div>
  </Link>
)
