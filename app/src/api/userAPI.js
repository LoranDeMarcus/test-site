import { $authHost, $host } from './index'

export const registration = async (formData) => {
  const { email, password, name, middleName, lastName, department } = formData
  const { data } = await $host.post(
    '/api/user/registration',
    {
      email, password, name, middleName, lastName, department
    })

  return data.token
}

export const check = async () => {
  const { data } = await $authHost.get('/api/user/auth')

  return data.token
}
