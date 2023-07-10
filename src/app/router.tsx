import { store } from '@/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

import { AuthProvider } from '@/modules/Auth'
import { AuthPage } from '@/pages/AuthPage'
import { FilmPage } from '@/pages/FilmPage'
import { PosterPage } from '@/pages/PosterPage'

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
        element: <AuthPage />
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
