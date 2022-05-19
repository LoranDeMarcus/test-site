import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { TestingPage } from './pages/TestingPage'
import { CabinetPage } from './pages/CabinetPage'
import { InternetSecurity } from './pages/TestingPage/InternetSecurity'
import { InformationControl } from './pages/TestingPage/InformationControl'
import { IdentityManagement } from './pages/TestingPage/IdentityManagement'
import { DigitalCommunication } from './pages/TestingPage/DigitalCommunication'

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
      </Routes>
    </HashRouter>
  )
}

export default App
