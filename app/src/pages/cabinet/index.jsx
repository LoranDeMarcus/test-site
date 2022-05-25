import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import { Controller, useForm } from 'react-hook-form'
import { form, Link_active } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { NavLink } from 'react-router-dom'

export const Cabinet = () => {
  const { control, register, reset, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = () => {

  }

  return (
    <Container>
      <s.Wrapper>
        <form onSubmit={handleSubmit(onSubmit)} className={form}>
          <s.Title>Авторизация</s.Title>
          <Controller
            name='login'
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label='Логин'
                onChange={onChange}
                value={value}
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
              />
            )}
          />
          <s.ButtonWrapper>
            <s.Registration>
              Нет аккаунта? <NavLink to='/registration' className={Link_active}>Зарегистрироваться</NavLink>
            </s.Registration>
            <Button>
              Войти
            </Button>
          </s.ButtonWrapper>
        </form>
      </s.Wrapper>
    </Container>
  )
}
