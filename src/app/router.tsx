import { createBrowserRouter, Outlet } from 'react-router-dom'

import { AuthProvider } from '@/modules/Auth'

export const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
      {
        path: '/auth',
        element: <div>auth</div>
      },
      {
        path: '/movie',
        element: <div>movie</div>
      }
    ]
  }
])
