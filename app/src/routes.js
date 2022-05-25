import { ADMIN_ROUTE, CABINET_ROUTE, HOME_ROUTE, TESTING_ROUTE } from './utils/consts'
import { Cabinet } from './pages/cabinet'
import { Testing } from './pages/testing'
import { Admin } from './pages/admin'
import { Home } from './pages/home'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Page: Admin
  }
]

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Page: Home
  },
  {
    path: CABINET_ROUTE,
    Page: Cabinet
  },
  {
    path: TESTING_ROUTE,
    Page: Testing
  }
]
