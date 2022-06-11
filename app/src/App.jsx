import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import Header from './components/Header'
import { observer } from 'mobx-react-lite'

const App = observer(() => (
  <HashRouter>
    <Header />
    <Routes>
      {publicRoutes.map(({ path, Page }) =>
        <Route key={path} path={path} element={<Page />} exact />
      )}
    </Routes>
  </HashRouter>
))

export default App
