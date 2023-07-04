import { Header } from '@/modules/Header'
import { PosterFilms } from '@/modules/PosterFilms'
import { Suspense } from 'react'

import posterTitle from './img/posterTitle.svg'
import s from './styles.module.css'

export const PosterPage = () => {
  return (
    <div>
      <Header type="withButton" />
      <main>
        <div className={s.title}>
          <img src={posterTitle} alt="афиша" />
          <h1 className={s.subtitle}> на сегодня</h1>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <PosterFilms />
        </Suspense>
      </main>
    </div>
  )
}
