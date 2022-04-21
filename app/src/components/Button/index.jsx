import React from 'react'
import { button } from './styles'

export const Button = ({ type='button', children }) => {
  return (
    <button className={button} type={type}>
      {children}
    </button>
  )
}
