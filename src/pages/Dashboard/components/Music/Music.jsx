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
  faPlay,
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

        {/* <MusicLink>
            <Link to={`dashboard/pratice/${_id}`}>
              <Icon icon={faPlay} /> Praticar
            </Link>
          </MusicLink> */}

        <ButtonsWrapper>
          <Link to={`dashboard/pratice/${_id}`}>
            <Icon icon={faPlay} /> Praticar
          </Link>

          <Link to={`/dashboard/edit/${_id}`}>
            <Icon icon={faPaintBrush} /> Editar
          </Link>

          <Link to={`/dashboard/delete/${_id}`}>
            <Icon icon={faTrash} /> Deletar
          </Link>
        </ButtonsWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Music
