import React, { createContext, useContext } from 'react'

import * as s from './styles'

const RadioGroupContext = createContext({
  _value: '',
  onChange: () => {},
})

const Checkbox = ({ children, name, value, id, size = 's', ref, disabled = false }) => {
  const { onChange, _value } = useContext(RadioGroupContext)
  return (
    <s.CheckboxWrapper>
      <input
        id={id}
        onChange={() => {
          onChange(value)
        }}
        ref={ref}
        checked={value === _value}
        type="checkbox"
        name={name}
        disabled={disabled}
      />

      <s.Label htmlFor={id} size={size}>
        {children}
      </s.Label>
    </s.CheckboxWrapper>
  )
}

const CheckboxGroup = ({ value, onChange = () => {}, children }) => {
  const contextValue = {
    _value: value,
    onChange,
  }
  return <RadioGroupContext.Provider value={contextValue}>{children}</RadioGroupContext.Provider>
}

export { Checkbox, CheckboxGroup }
