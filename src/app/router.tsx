import { store } from '@/store'
import { lazy } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, Outlet } from 'react-router-dom'

import { AuthProvider } from '@/modules/Auth'
import { FilmPage } from '@/pages/FilmPage'

const PosterPage = lazy(() =>
  import('@/pages/PosterPage').then((module) => ({ default: module.PosterPage }))
)

export const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <Provider store={store}>
          <Outlet />
        </Provider>
      </AuthProvider>
    ),
    children: [
      {
        path: '/',
        element: <div>root</div>
      },
      {
        path: '/auth',
        element: <div>auth</div>
      },
      {
        path: '/poster',
        element: <PosterPage />
      },
      {
        path: '/poster/:id',
        element: <FilmPage />
      }
    ]
  }
])
