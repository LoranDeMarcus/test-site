import React, { createContext, useContext, useMemo, useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const axiosInstance = useMemo(() => axios.create({
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: false,
  }), [cookies])

  const login = async (email, password) => {
    try {
      const { data } = await axiosInstance.post('/api/user/login', {
        email,
        password,
      })
      console.log(data.token)
      setUser(jwtDecode(data.token))
      setCookie('token', data.token, {
        httpOnly: true,
        maxAge: 60 * 60 * 2, // 2 hour
      })
    } catch (e) {
      console.log(e)
    }
  }

  const logout = () => {
    setUser({})
    removeCookie('token')
  }

  return (
    <CookiesProvider>
      <AuthContext.Provider value={{ user, setUser, login, logout }}>
        {children}
      </AuthContext.Provider>
    </CookiesProvider>
  )
}

export const useAuth = () => useContext(AuthContext)
export default AuthProvider
