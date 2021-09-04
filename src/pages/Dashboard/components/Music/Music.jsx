import React from 'react'
import {
  Wrapper,
  SideImage,
  Title,
  ButtonsWrapper,
  ContentWrapper,
} from './style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faPaintBrush,
  faGuitar,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Music({ title, _id, tab, video }) {
  return (
    <Wrapper>
      <SideImage />

      <ContentWrapper>
        <Title>{title}</Title>

        <Link to={`dashboard/pratice/${_id}`}>
          Praticar <FontAwesomeIcon icon={faGuitar} />
        </Link>

        <ButtonsWrapper>
          <Link to={`/dashboard/edit/${_id}`}>
            <FontAwesomeIcon icon={faPaintBrush} />
          </Link>

          <Link to={`/dashboard/delete/${_id}`}>
            <FontAwesomeIcon icon={faTrash} />
          </Link>
        </ButtonsWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Music
