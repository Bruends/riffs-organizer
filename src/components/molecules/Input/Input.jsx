import React from 'react'
import { LabelStyle, InputStyle, ErrorSpan } from './style'

function Input({ id, label, error, ...props }) {
  return (
    <div>
      {label ? <LabelStyle htmlFor={id}>{label}</LabelStyle> : null}
      <InputStyle {...props} id={id} name={id} />
      {error ? <ErrorSpan>{error}</ErrorSpan> : null}
    </div>
  )
}

export default Input
