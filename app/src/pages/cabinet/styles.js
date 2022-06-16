import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const AuthWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h2`
  margin: 0 0 20px;
  text-align: center;
`

export const form = css`
  width: 500px;
  padding: 30px;
  border: 1px solid ${colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const image = css`
  display: block;
  margin: 30px auto 0;
  width: 70%;
`

export const Table = styled.table`
  margin: 80px auto 0;
  width: 100%;
  border-collapse:collapse;
  border-spacing:0;
  border: 2px solid #595959;
`

export const Thead = styled.thead`
  border: 2px solid ${colors.dark};
`

export const Td = styled.td`
  border: 1px solid ${colors.dark};
  border-bottom: none;
  padding: 14px;
  width: 30px;
  
  &:nth-child(1) {
    width: 30%;
  }
  
  &:nth-child(2) {
    width: 10%;
  }
  
  &:last-child {
    width: 70%;
  }
`

export const Th = styled.th`
  border: 1px solid ${colors.dark};
  padding: 3px;
  width: 30px;
  height: 35px;
  background: #347c99;
  color: #fff;
  font-weight: normal;
`

export const ChartWrapper = styled.div`
  margin: 80px auto 0;
  width: 85%;
`
