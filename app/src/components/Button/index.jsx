import React from 'react'
import { GhostButton, PrimaryButton } from './styles'

export const Button = ({ type='button', onClick, children, ghost }) => {
  if (ghost) {
    return (
      <GhostButton type={type} onClick={onClick}>
        {children}
      </GhostButton>
  )}

  return (
    <PrimaryButton type={type} onClick={onClick}>
      {children}
    </PrimaryButton>
  )
}
