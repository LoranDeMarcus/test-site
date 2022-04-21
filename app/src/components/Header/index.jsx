import React from 'react'
import { NavLink } from 'react-router-dom'

import * as s from './styles'
import Container from '../Container'
import logo from '../../assets/logo.png'
import { Button } from '../Button'

const Header = () => {
  return (
    <s.Header>
      <Container>
        <s.Inner>
          <img src={logo} alt='logo' className={s.Image} />
          <s.Navbar>
            <s.NavList>
              <li>
                <NavLink
                  to='/'
                  className={({ isActive }) => isActive
                    ? s.link_active
                    : s.link
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/testing'
                  className={({ isActive }) => isActive
                    ? s.link_active
                    : s.link
                  }
                >
                  Тестирование
                </NavLink>
              </li>
            </s.NavList>
            <s.ButtonsWrapper>
              <button className={s.Login}>
                Войти
              </button>
              <Button>
                Зарегистрироваться
              </Button>
            </s.ButtonsWrapper>
          </s.Navbar>
        </s.Inner>
      </Container>
    </s.Header>
  )
}

export default Header
