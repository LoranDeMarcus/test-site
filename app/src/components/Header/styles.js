import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Header = styled.header`
  height: 80px;
  border-bottom: 1px solid ${colors.gray};
`

export const Inner = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Image = css`
  height: 60px;
`

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 38px;
`

export const link = css`
  padding: 30px 0;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.black};
  cursor: pointer;
  transition: all 0.3s ease-out 0s;
  text-decoration: none;

  &:hover {
    color: ${colors.blue};
  }
`

export const link_active = css`
  position: relative;
  padding: 30px 0;
  color: ${colors.blue};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-out 0s;
  text-decoration: none;

  &::after {
    width: 100%;
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 3px;
    background: ${colors.blue};
    border-radius: 10px;
    transition: all 0.3s ease-out 0s;
    z-index: 5;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

export const Login = css`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.blue};
  cursor: pointer;
  transition: all 0.3s ease-out 0s;
  
  &:hover {
    color: ${colors.black};
  }
`
