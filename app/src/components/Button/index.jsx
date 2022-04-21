import React from 'react'
import { button } from './styles'

export const Button = ({ children }) => {
  return (
    <button className={button} type='button'>
      {children}
    </button>
  )
}
