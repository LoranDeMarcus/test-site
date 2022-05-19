import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'
import { TestingPage } from './pages/TestingPage'
import { CabinetPage } from './pages/cabinet'
import { InternetSecurity } from './pages/TestingPage/internetSecurity'
import { InformationControl } from './pages/TestingPage/informationControl'
import { IdentityManagement } from './pages/TestingPage/identityManagement'
import { DigitalCommunication } from './pages/TestingPage/digitalCommunication'
import { DigitalEtiquette } from './pages/TestingPage/digitalEtiquette'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/cabinet' element={<CabinetPage />} />
        <Route path='/testing' element={<TestingPage />} />
        <Route path='/testing/internet-security' element={<InternetSecurity />} />
        <Route path='/testing/information-control' element={<InformationControl />} />
        <Route path='/testing/identity-management' element={<IdentityManagement />} />
        <Route path='/testing/digital-communication' element={<DigitalCommunication />} />
        <Route path='/testing/digital-etiquette' element={<DigitalEtiquette />} />
      </Routes>
    </HashRouter>
  )
}

export default App
