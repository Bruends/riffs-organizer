import React from 'react'
import { LabelStyle, InputStyle, ErrorSpan } from './style'

function Input({ id, label, error, ...props }) {
  return (
    <>
      {label ? <LabelStyle htmlFor={id}>{label}</LabelStyle> : null}
      <InputStyle {...props} id={id} name={id} />
      {error ? <ErrorSpan>{error}</ErrorSpan> : null}
    </>
  )
}

export default Input
