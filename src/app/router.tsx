import { createBrowserRouter, Outlet } from 'react-router-dom'

import { AuthPage } from '@/pages/AuthPage'
import { FilmPage } from '@/pages/FilmPage'
import { PosterPage } from '@/pages/PosterPage'
import { RootPage } from '@/pages/RootPage'
import { ProfilePage } from '@/pages/UserProfilePage'
import { ProfileProvider } from '@/shared/api'

export const router = createBrowserRouter([
  {
    element: (
      <ProfileProvider>
        <div className="wrapper">
          <Outlet />
        </div>
      </ProfileProvider>
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
