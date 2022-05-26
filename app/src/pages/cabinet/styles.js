import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
`

export const Title = styled.h2`
  margin: 0 0 30px;
  text-align: center;
`

export const form = css`
  width: 500px;
  padding: 30px;
  border: 1px solid ${colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Registration = styled.span`
  
`

export const Link_active = css`
  color: ${colors.blue};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${colors.dark}
  }
`
