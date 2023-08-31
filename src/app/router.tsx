import { createBrowserRouter, Outlet } from 'react-router-dom'

import { AuthPage } from '@/pages/AuthPage'
import { FilmPage } from '@/pages/FilmPage'
import { PosterPage } from '@/pages/PosterPage'
import { RootPage } from '@/pages/RootPage'
import { ProfilePage } from '@/pages/UserProfilePage'
import { routes } from '@/shared/const'

export const router = createBrowserRouter([
  {
    element: (
      <div className="wrapper">
        <Outlet />
      </div>
    ),
    children: [
      {
        path: routes.root,
        element: <RootPage />
      },
      {
        path: routes.auth,
        element: <AuthPage />
      },
      {
        path: routes.poster,
        element: <PosterPage />
      },
      {
        path: `${routes.poster}/:id`,
        element: <FilmPage />
      },
      {
        path: routes.profile,
        element: <ProfilePage />
      }
    ]
  }
])
