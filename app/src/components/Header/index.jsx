import React from 'react'

import * as s from './styles'
import Container from '../Container'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <s.Header>
      <Container>
        <s.Inner>
          <img src={logo} alt='logo' className={s.Image} />
          <s.Navbar>
            <s.NavList>
              <s.NavItem_Active>
                Главная
              </s.NavItem_Active>
              <s.NavItem>
                Тестирование
              </s.NavItem>
            </s.NavList>
            <s.ButtonsWrapper>
              <button className={s.Login}>
                Войти
              </button>
              <button className={s.SignUp}>
                Зарегистрироваться
              </button>
            </s.ButtonsWrapper>
          </s.Navbar>
        </s.Inner>
      </Container>
    </s.Header>
  )
}

export default Header
