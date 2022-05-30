import {
  ADMIN_ROUTE,
  CABINET_ROUTE, DEVELOP_DIGITAL_CONTENT, DIGITAL_COMMUNICATION, DIGITAL_ETIQUETTE,
  HOME_ROUTE, IDENTITY_MANAGEMENT,
  INFORMATION_CONTROL,
  INTERNET_SECURITY, TEACHER_DIGITAL_TECHS,
  TESTING_ROUTE
} from './utils/consts'
import { Cabinet } from './pages/cabinet'
import { Testing } from './pages/testing'
import { Admin } from './pages/admin'
import { Home } from './pages/home'
import { InternetSecurity } from './pages/testing/internetSecurity'
import { InformationControl } from './pages/testing/informationControl'
import { IdentityManagement } from './pages/testing/identityManagement'
import { DigitalEtiquette } from './pages/testing/digitalEtiquette'
import { DigitalCommunication } from './pages/testing/digitalCommunication'
import { DevelopDigitalContent } from './pages/testing/developDigitalContent'
import { TeacherDigitalTechs } from './pages/testing/teacherDigitalTechs'

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
  },
  {
    path: INTERNET_SECURITY,
    Page: InternetSecurity
  },
  {
    path: INFORMATION_CONTROL,
    Page: InformationControl
  },
  {
    path: IDENTITY_MANAGEMENT,
    Page: IdentityManagement
  },
  {
    path: DIGITAL_COMMUNICATION,
    Page: DigitalCommunication
  },
  {
    path: DIGITAL_ETIQUETTE,
    Page: DigitalEtiquette
  },
  {
    path: DEVELOP_DIGITAL_CONTENT,
    Page: DevelopDigitalContent
  },
  {
    path: TEACHER_DIGITAL_TECHS,
    Page: TeacherDigitalTechs
  },
]
