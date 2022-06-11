import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes'
import Header from './components/Header'
import { observer } from 'mobx-react-lite'

const App = observer(() => (
  <BrowserRouter>
    <Header />
    <Routes>
      {publicRoutes.map(({ path, Page }) =>
        <Route key={path} path={path} element={<Page />} exact />
      )}
    </Routes>
  </BrowserRouter>
))

export default App
