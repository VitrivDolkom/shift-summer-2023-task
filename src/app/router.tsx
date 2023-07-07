import { store } from '@/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

import { AuthProvider } from '@/modules/Auth'
import { CardInfoPage } from '@/pages/CardInfoPage'
import { FilmPage } from '@/pages/FilmPage'
import { PosterPage } from '@/pages/PosterPage'

// ! error: export only components
// const PosterPage = lazy(() =>
//   import('@/pages/PosterPage').then((module) => ({ default: module.PosterPage }))
// )

export const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <Provider store={store}>
          <div className="wrapper">
            <Outlet />
          </div>
        </Provider>
      </AuthProvider>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/poster" replace />
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
      },
      {
        path: '/card',
        element: <CardInfoPage />
      }
    ]
  }
])
