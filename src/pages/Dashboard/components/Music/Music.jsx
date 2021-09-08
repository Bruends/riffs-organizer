import React from 'react'
import {
  Wrapper,
  MusicLink,
  SideDetail,
  Title,
  ButtonsWrapper,
  ContentWrapper,
} from './style'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faPaintBrush,
  faGuitar,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Music({ title, _id, tab, video }) {
  return (
    <Wrapper>
      <SideDetail>
        <Icon icon={faMusic} />
      </SideDetail>

      <ContentWrapper>
        <Title>{title}</Title>

        <MusicLink>
          <Link to={`dashboard/pratice/${_id}`}>
            <Icon icon={faGuitar} /> Praticar
          </Link>
        </MusicLink>

        <ButtonsWrapper>
          <Link to={`/dashboard/edit/${_id}`}>
            <Icon icon={faPaintBrush} />
          </Link>

          <Link to={`/dashboard/delete/${_id}`}>
            <Icon icon={faTrash} />
          </Link>
        </ButtonsWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Music
