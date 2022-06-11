import * as route from './utils/consts'
import { Cabinet } from './pages/cabinet'
import { Login } from './pages/cabinet/Login'
import { Registration } from './pages/cabinet/Registration'
import { Testing } from './pages/testing'
import { Home } from './pages/home'
import { InternetSecurity } from './pages/testing/internetSecurity'
import { InformationControl } from './pages/testing/informationControl'
import { IdentityManagement } from './pages/testing/identityManagement'
import { DigitalEtiquette } from './pages/testing/digitalEtiquette'
import { DigitalCommunication } from './pages/testing/digitalCommunication'
import { DevelopDigitalContent } from './pages/testing/developDigitalContent'
import { TeacherDigitalTechs } from './pages/testing/teacherDigitalTechs'

export const publicRoutes = [
  {
    path: route.HOME,
    Page: Home
  },
  {
    path: route.LOGIN,
    Page: Login
  },
  {
    path: route.REGISTRATION,
    Page: Registration
  },
  {
    path: route.CABINET,
    Page: Cabinet
  },
  {
    path: route.TESTING,
    Page: Testing
  },
  {
    path: route.INTERNET_SECURITY,
    Page: InternetSecurity
  },
  {
    path: route.INFORMATION_CONTROL,
    Page: InformationControl
  },
  {
    path: route.IDENTITY_MANAGEMENT,
    Page: IdentityManagement
  },
  {
    path: route.DIGITAL_COMMUNICATION,
    Page: DigitalCommunication
  },
  {
    path: route.DIGITAL_ETIQUETTE,
    Page: DigitalEtiquette
  },
  {
    path: route.DEVELOP_DIGITAL_CONTENT,
    Page: DevelopDigitalContent
  },
  {
    path: route.TEACHER_DIGITAL_TECHS,
    Page: TeacherDigitalTechs
  },
]
