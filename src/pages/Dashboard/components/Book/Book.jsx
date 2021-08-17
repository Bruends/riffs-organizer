import React from 'react'
import { Wrapper, Cover, Title, ShortDescription } from './style'

function Book({ title, description }) {
  return (
    <Wrapper>
      <Cover src="/imgs/cover.jpg" />
      <Title>{title}</Title>
      <ShortDescription>{description}</ShortDescription>
    </Wrapper>
  )
}

export default Book
