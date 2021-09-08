import React from 'react'
import { ButtonStyle } from './style'

function Button(props) {
  return <ButtonStyle {...props}> {props.children} </ButtonStyle>
}

export default Button
