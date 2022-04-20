import { styled } from '@linaria/react'
import { css } from '@linaria/core'

export const Header = styled.header`
  height: 80px;
  border-bottom: 1px solid #e6e6e6;
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

export const NavItem = styled.li`
  padding: 30px 0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-out 0s;
  
  &:hover {
    color: #2042e3;
  }
`

export const NavItem_Active = styled.li`
  position: relative;
  padding: 30px 0;
  color: #2042e3;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-out 0s;
  
  &::after {
    width: 100%;
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 3px;
    background: #2042e3;
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
  color: #2042e3;
  cursor: pointer;
  transition: all 0.3s ease-out 0s;
  
  &:hover {
    color: #333;
  }
`

export const SignUp = css`
  color: #fff;
  background: #2042e3;
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
  height: 45px;
  transition: 0.5s;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  
  &:hover {
    background-color: #333;
  }
`
