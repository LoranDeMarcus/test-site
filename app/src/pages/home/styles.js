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
  margin-bottom: 45px;
  padding-bottom: 20px;
  font-size: 30px;
  line-height: 44px;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid ${colors.white};
  border-bottom-color: ${({ blue }) => blue ? colors.deepBlue : colors.white};
`

export const ListWrapper = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 35px;
  list-style: none;
`

export const ListItem = styled.li`
  width: 340px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  list-style: none;
`

export const Link = css`
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  color: ${colors.white};
`

export const Point = styled.span`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  background-color: ${colors.lightBlue};
  margin-right: 15px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Caption = styled.span`
  padding-top: 4px;
`

export const StepsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Step = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

export const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 6px solid ${colors.deepBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 700;
  color: ${colors.red}
`

export const Hint = styled.span`
  font-size: 20px;
  text-align: center;
  color: ${colors.deepBlue};
`

export const cert = css`
  display: block;
  width: 700px;
  margin: 0 auto;
`
