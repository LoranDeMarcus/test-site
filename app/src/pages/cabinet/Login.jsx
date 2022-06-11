import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import { Controller, useForm } from 'react-hook-form'
import { form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth } from '../../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'

const requiredFieldText = 'Обязательное поле'

const loginValidationSchema = yup.object({
  email: yup.string().required(requiredFieldText),
  password: yup.string().required(requiredFieldText),
})

export const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const onSubmit = async (formData) => {
    try {
      await login(formData)
      navigate('/')
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  return (
    <Container>
      <s.AuthWrapper>
        <form onSubmit={handleSubmit(onSubmit)} className={form}>
          <s.Title>Авторизация</s.Title>
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
          <s.ButtonWrapper>
            <Button type='submit'>
              Войти
            </Button>
          </s.ButtonWrapper>
        </form>
      </s.AuthWrapper>
    </Container>
  )
}
