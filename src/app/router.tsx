import { store } from '@/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, Outlet } from 'react-router-dom'

import { AuthPage } from '@/pages/AuthPage'
import { FilmPage } from '@/pages/FilmPage'
import { PosterPage } from '@/pages/PosterPage'
import { ProfilePage } from '@/pages/UserProfilePage'
import { RootPage } from '@/pages/RootPage'

export const router = createBrowserRouter([
  {
    element: (
      <Provider store={store}>
        <div className="wrapper">
          <Outlet />
        </div>
      </Provider>
    ),
    children: [
      {
        path: '/',
        element: <RootPage />
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
      },
      {
        path: '/profile',
        element: <ProfilePage />
      }
    ]
  }
])
