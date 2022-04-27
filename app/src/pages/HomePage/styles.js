import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 20px;
`

export const TextWrapper = styled.div`
  width: 50%;
`

export const image = css`
  height: 350px;
`

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 40px;
  font-weight: 700;
  line-height: 55px;
  color: ${colors.dark};
`

export const Text = styled.p`
  margin-top: 15px;
  font-size: 18px;
  line-height: 24px;
`
