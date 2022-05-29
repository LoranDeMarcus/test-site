import { setCookie } from 'react-use-cookie'
import jwtDecode from 'jwt-decode'
import { $authHost, $host } from './index'

export const registration = async (formData) => {
  const { email, password, name, middleName, lastName, department } = formData
  const { data } = await $host.post(
    '/api/user/registration',
    {
      email, password, name, middleName, lastName, department
    })

  setCookie('token', data.token, {
    days: 1,
    SameSite: 'Lax',
    Secure: true,
  })

  return jwtDecode(data.token)
}

export const login = async ({ email, password }) => {
  const { data } = await $host.post('/api/user/login', { email, password })

  setCookie('token', data.token, {
    days: 1,
    SameSite: 'Lax',
    Secure: true,
  })

  return jwtDecode(data.token)
}

export const check = async () => {
  const { data } = await $authHost.get('/api/user/auth')

  setCookie('token', data.token, {
    days: 1,
    SameSite: 'Lax',
    Secure: true,
  })

  return jwtDecode(data.token)
}
