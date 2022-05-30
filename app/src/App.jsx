import React, { useContext } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
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
      </Routes>
    </HashRouter>
  )
})

export default App
