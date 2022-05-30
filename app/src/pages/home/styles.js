import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Wrapper = styled.div`
  margin: 80px 0;
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
  line-height: 55px;
  font-weight: 700;
  color: ${colors.dark};
`

export const Text = styled.p`
  margin-top: 15px;
  font-size: 18px;
  line-height: 24px;
`

export const TransparentSection = styled.section`
  padding: 90px 0;
  background-color: ${colors.gray};
  color: ${colors.dark};
`

export const ColoredSection = styled.section`
  padding: 90px 0;
  background-color: ${colors.deepBlue};
  color: ${colors.white};
`

export const TitleTwo = styled.h2`
  margin-bottom: 25px;
  padding-bottom: 20px;
  font-size: 30px;
  line-height: 44px;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid ${colors.white};
`

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Paragraph = styled.p`
  width: 49%;
  margin-bottom: 15px;
  display: block;
  border: 1px solid ${colors.white};
  border-radius: 6px;
  padding: 30px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  
  &:last-child {
    margin: 10px auto;
  }
`

export const Point = styled.span`
  margin-right: 15px;
  font-size: 24px;
`
