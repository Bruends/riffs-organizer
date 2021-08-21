import React from 'react'
import { Wrapper, Cover, Title, ShortDescription, ButtonWrapper } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Book({ title, description, _id }) {
  return (
    <>
      <Wrapper>
        <Cover src="/imgs/cover.jpg" />

        <Title>{title}</Title>

        <ShortDescription>{description}</ShortDescription>

        <ButtonWrapper>
          <Link to={`/dashboard/edit/${_id}`}>
            <FontAwesomeIcon icon={faPaintBrush} />
          </Link>

          <Link to={`/dashboard/delete/${_id}`}>
            <FontAwesomeIcon icon={faTrash} />
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </>
  )
}

export default Book
