import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import UserStore from './store/UserStore'
import QuestionStore from './store/QuestionStore'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    question: new QuestionStore()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
)
