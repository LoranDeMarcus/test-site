import React, { useContext } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { InternetSecurity } from './pages/testing/internetSecurity'
import { InformationControl } from './pages/testing/informationControl'
import { IdentityManagement } from './pages/testing/identityManagement'
import { DigitalCommunication } from './pages/testing/digitalCommunication'
import { DigitalEtiquette } from './pages/testing/digitalEtiquette'
import { DevelopDigitalContent } from './pages/testing/developDigitalContent'
import { TeacherDigitalTechs } from './pages/testing/teacherDigitalTechs'
import { authRoutes, publicRoutes } from './routes'
import { Context } from './index'
import Header from './components/Header'
import { observer } from 'mobx-react-lite'

const App = observer(() => {
  const { user } = useContext(Context)


  return (
    <HashRouter>
      <Header />
      <Routes>
        {user.isAuth && authRoutes.map(({ path, Page }) =>
          <Route key={path} path={path} element={<Page />} exact />
        )}
        {publicRoutes.map(({ path, Page }) =>
          <Route key={path} path={path} element={<Page />} exact />
        )}
        {/*
      <Route path='/testing/internet-security' element={<InternetSecurity />} />
      <Route path='/testing/information-control' element={<InformationControl />} />
      <Route path='/testing/identity-management' element={<IdentityManagement />} />
      <Route path='/testing/digital-communication' element={<DigitalCommunication />} />
      <Route path='/testing/digital-etiquette' element={<DigitalEtiquette />} />
      <Route path='/testing/develop-digital-content' element={<DevelopDigitalContent />} />
      <Route path='/testing/teacher-digital-techs' element={<TeacherDigitalTechs />} />*/}
      </Routes>
    </HashRouter>
  )
})

export default App
