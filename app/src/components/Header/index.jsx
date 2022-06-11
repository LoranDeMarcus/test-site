import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Container from '../Container'
import logo from '../../assets/logo.png'
import { button } from '../Button/styles'
import * as s from './styles'
import { useAuth } from '../../provider/AuthProvider'
import { Button } from '../Button'

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const isNoUser = Object.keys(user).length === 0

  const logoutHandle = () => {
    logout()
    navigate('/')
  }

  return (
    <s.Header>
      <Container>
        <s.Inner>
          <img src={logo} alt="logo" className={s.Image} />
          <s.Navbar>
            <s.NavList>
              <li>
                <NavLink
                  to="/"
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
                  to="/testing"
                  className={({ isActive }) => isActive
                    ? s.link_active
                    : s.link
                  }
                >
                  Оценка
                </NavLink>
              </li>
              {isNoUser ? (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) => isActive
                        ? s.link_active
                        : s.link
                      }
                    >
                      Вход
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/registration"
                      className={({ isActive }) => isActive
                        ? s.link_active
                        : s.link
                      }
                    >
                      Регистрация
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <Button ghost onClick={logoutHandle}>
                    Выход
                  </Button>
                </li>
              )}
              <li style={{ marginLeft: '20px' }}>
                <NavLink
                  to="/cabinet"
                  className={button}
                >
                  Личный кабинет
                </NavLink>
              </li>
            </s.NavList>
          </s.Navbar>
        </s.Inner>
      </Container>
    </s.Header>
  )
}

export default Header
