import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import { form } from './styles'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { registration } from '../../api/userAPI'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useAuth } from '../../provider/AuthProvider'
import jwtDecode from 'jwt-decode'

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
export const Registration = () => {
  const { setUser } = useAuth()
  const [cookies, setCookie] = useCookies(['token'])
  const navigate = useNavigate()

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
      const token = await registration(formData)
      setCookie('token', token)
      console.log(jwtDecode(token))
      setUser(jwtDecode(token))
      navigate('/')
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  return (
    <Container>
      <s.AuthWrapper>
        <form onSubmit={handleSubmit(onSubmit)} className={form}>
          <s.Title>Регистрация</s.Title><Controller
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
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Имя"
                onChange={onChange}
                value={value}
                errorMessage={errors?.name?.message}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Фамилия"
                onChange={onChange}
                value={value}
                errorMessage={errors?.lastName?.message}
              />
            )}
          />
          <Controller
            name="middleName"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Отчество"
                onChange={onChange}
                value={value}
                errorMessage={errors?.middleName?.message}
              />
            )}
          />
          <Controller
            name="birthDate"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Дата рождения"
                onChange={onChange}
                value={value}
                errorMessage={errors?.birthDate?.message}
              />
            )}
          />
          <Controller
            name="department"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Факультет"
                onChange={onChange}
                value={value}
                errorMessage={errors?.department?.message}
              />
            )}
          />
          <Controller
            name="cathedra"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Кафедра"
                onChange={onChange}
                value={value}
                errorMessage={errors?.cathedra?.message}
              />
            )}
          />
          <s.ButtonWrapper>
            <Button type="submit">
              Регистрация
            </Button>
          </s.ButtonWrapper>
        </form>
      </s.AuthWrapper>
    </Container>
  )
}
