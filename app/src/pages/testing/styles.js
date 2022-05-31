import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Wrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
`

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 40px;
  line-height: 55px;
  font-weight: 700;
  color: ${colors.dark};
`

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
`

export const ColoredSection = styled.section`
  padding: 50px 0;
  background-color: ${colors.deepBlue};
  color: ${colors.white};
`

export const TitleThree = styled.h3`
  margin-bottom: 25px;
  padding-bottom: 20px;
  font-size: 28px;
  line-height: 42px;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid ${colors.white};
`

export const ParagraphWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const paragraph = css`
  width: 49%;
  margin-bottom: 15px;
  display: block;
  border: 1px solid ${colors.white};
  border-radius: 6px;
  padding: 30px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: ${colors.white};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:last-child {
    margin: 10px auto;
  }

  &:hover {
    background-color: ${colors.lightBlue};
    box-shadow: 0 0 20px 10px rgba(34, 60, 80, 0.15);
  }
`

export const Point = styled.span`
  margin-right: 15px;
  font-size: 24px;
`
