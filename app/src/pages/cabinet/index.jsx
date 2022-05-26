import React from 'react'
import Container from '../../components/Container'
import { Auth } from './auth'

export const Cabinet = () => {
  const isLogin = true

  if (isLogin) {
    return <Auth />
  }

  return (
    <Container>

    </Container>
  )
}
