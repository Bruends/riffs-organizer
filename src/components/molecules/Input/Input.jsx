import React from 'react'
import { LabelStyle, InputStyle, ErrorSpan } from './style'

function Input({ id, label, error, ...props }) {
  return (
    <>
      <LabelStyle htmlFor={id}>{label}</LabelStyle>
      <InputStyle {...props} id={id} name={id} />
      <ErrorSpan>{error}</ErrorSpan>
    </>
  )
}

export default Input
