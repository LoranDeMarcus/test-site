import React from 'react'

import * as s from './styles'
import Container from '../Container'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <s.Header>
      <Container>
        <s.Inner>
          <s.LogoWrapper>
            <img src={logo} alt='logo' />
          </s.LogoWrapper>
          123
        </s.Inner>
      </Container>
    </s.Header>
  )
}

export default Header
