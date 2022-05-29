import React, { useContext, useState } from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import { Controller, useForm } from 'react-hook-form'
import { form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { login, registration } from '../../api/userAPI'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { useNavigate } from "react-router-dom"

const requiredFieldText = 'Обязательное поле'

const validationSchema = yup.object({
  email: yup.string().required(requiredFieldText),
  password: yup.string().required(requiredFieldText),
  name: yup.string().required(requiredFieldText),
  lastName: yup.string().required(requiredFieldText),
  middleName: yup.string().required(requiredFieldText),
  birthDate: yup.string().optional(),
  department: yup.string().required(requiredFieldText),
  cathedra: yup.string().optional(),
})

const loginValidationSchema = yup.object({
  email: yup.string().required(requiredFieldText),
  password: yup.string().required(requiredFieldText),
})

export const Auth = observer(() => {
  const [isLogin, setIsLogin] = useState(false)
  const { user } = useContext(Context)

  const navigate = useNavigate()

  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(isLogin ? loginValidationSchema : validationSchema),
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

  const handleLogin = () => {
    reset()
    setIsLogin(!isLogin)
  }

  const onSubmit = async (formData) => {
    try {
      let data
      if (isLogin) {
        data = await login(formData)
      } else {
        data = await registration(formData)
      }
      user.setUser(data)
      user.setAuth(true)
      navigate(0)
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
          {!isLogin && (
            <>
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
            </>
          )}
          <s.ButtonWrapper>
            <div>
              {isLogin
                ? <>Нет аккаунта? <Button onClick={handleLogin} ghost>Зарегистрироваться</Button></>
                : <>Есть аккаунта? <Button onClick={handleLogin} ghost>Войти</Button></>
              }

            </div>
            <Button type='submit'>
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </s.ButtonWrapper>
        </form>
      </s.AuthWrapper>
    </Container>
  )
})
