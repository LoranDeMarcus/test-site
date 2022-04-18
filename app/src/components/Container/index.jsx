import React from 'react'
import * as s from './styles'

const Container = ({ children }) => {
  return (
    <s.Wrapper>
      {children}
    </s.Wrapper>
  )
}

export default Container
