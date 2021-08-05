import React from 'react'
import { LabelStyle, InputStyle } from './style'

function Input({ id, title, ...props }) {
  return (
    <>
      <LabelStyle htmlFor={id}>{title}</LabelStyle>
      <InputStyle {...props} id={id} name={id} />
    </>
  )
}

export default Input
