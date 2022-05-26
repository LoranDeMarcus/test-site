import React, { useContext } from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import { Controller, useForm } from 'react-hook-form'
import { form, Link_active } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts'
import { login, registration } from '../../api/userAPI'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'

const validationSchema = yup.object({
  email: yup.string().required('Введите логин'),
  password: yup.string().required('Введите пароль'),
  name: yup.string().required('Введите имя'),
  lastName: yup.string().required('Введите фамилию'),
  middleName: yup.string().required('Введите отчество'),
  birthDate: yup.string().optional(),
  department: yup.string().required('Введите факультет'),
  cathedra: yup.string().optional(),
})

export const Auth = observer(() => {
  const { user } = useContext(Context)
  const isLogin = false

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      lastName: '',
      middleName: '',
      birthDate: '',
      department: '',
      cathedra: '',
    }
  })

  const onSubmit = async (formData) => {
    try {
      let data
      if (isLogin) {
        data = await login()
      } else {
        data = await registration(formData)
      }
      user.setUser(data)
      user.setAuth(true)
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  return (
    <Container>
      <s.AuthWrapper>
        <form onSubmit={handleSubmit(onSubmit)} className={form}>
          <s.Title>{isLogin ? 'Авторизация' : 'Регистрация'}</s.Title>
          <Controller
            name='email'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label='Email'
                onChange={onChange}
                value={value}
                errorMessage={errors?.email?.message}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                htmlType='password'
                label='Пароль'
                onChange={onChange}
                value={value}
                errorMessage={errors?.password?.message}
              />
            )}
          />
          <Controller
            name='name'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label='Имя'
                onChange={onChange}
                value={value}
                errorMessage={errors?.name?.message}
              />
            )}
          />
          <Controller
            name='lastName'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label='Фамилия'
                onChange={onChange}
                value={value}
                errorMessage={errors?.lastName?.message}
              />
            )}
          />
          <Controller
            name='middleName'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label='Отчество'
                onChange={onChange}
                value={value}
                errorMessage={errors?.middleName?.message}
              />
            )}
          />
          <Controller
            name='birthDate'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label='Дата рождения'
                onChange={onChange}
                value={value}
                errorMessage={errors?.birthDate?.message}
              />
            )}
          />
          <Controller
            name='department'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label='Факультет'
                onChange={onChange}
                value={value}
                errorMessage={errors?.department?.message}
              />
            )}
          />
          <Controller
            name='cathedra'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label='Кафедра'
                onChange={onChange}
                value={value}
                errorMessage={errors?.cathedra?.message}
              />
            )}
          />
          <s.ButtonWrapper>
            <s.Registration>
              {isLogin
                ? <>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className={Link_active}>Зарегистрироваться</NavLink></>
                : <>Есть аккаунта? <NavLink to={LOGIN_ROUTE} className={Link_active}>Войти</NavLink></>
              }

            </s.Registration>
            <Button type='submit'>
              {isLogin
                ? 'Войти'
                : 'Регистрация'
              }
            </Button>
          </s.ButtonWrapper>
        </form>
      </s.AuthWrapper>
    </Container>
  )
})
