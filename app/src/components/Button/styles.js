import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const button = css`
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  background: ${colors.blue};
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  height: 45px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.black};
  }
`

export const PrimaryButton = styled.button`
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  background: ${colors.blue};
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 20px;
  height: 45px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.black};
  }
`

export const GhostButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.blue};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.dark}
  }
`
