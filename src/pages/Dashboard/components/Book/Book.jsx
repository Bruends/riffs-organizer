import React from 'react'
import { Wrapper, Cover, Title, ShortDescription, ButtonWrapper } from './style'
import Button from '../../../../components/atoms/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPaintBrush } from '@fortawesome/free-solid-svg-icons'

function Book({ title, description }) {
  return (
    <Wrapper>
      <Cover src="/imgs/cover.jpg" />

      <Title>{title}</Title>

      <ShortDescription>{description}</ShortDescription>

      <ButtonWrapper>
        <Button value={<FontAwesomeIcon icon={faPaintBrush} />} />
        <Button value={<FontAwesomeIcon icon={faTrash} />} />
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Book
