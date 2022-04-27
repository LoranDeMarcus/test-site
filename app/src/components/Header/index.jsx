import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../Container'
import logo from '../../assets/logo.png'
import { button } from '../Button/styles'
import * as s from './styles'

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
                  Оценка
                </NavLink>
              </li>
              <li style={{ marginLeft: '20px' }}>
                <NavLink
                  to='/cabinet'
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
