import React from 'react'
import {
  Wrapper,
  SideImage,
  Title,
  ButtonsWrapper,
  ContentWrapper,
  MusicLinks,
} from './style'

import Button from '../../../../components/atoms/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Music({ title, _id, tab, video }) {
  return (
    <Wrapper>
      <SideImage />

      <ContentWrapper>
        <Title>{title}</Title>

        {tab ? <MusicLinks href={tab}>Tablatura</MusicLinks> : null}
        {video ? <MusicLinks href={video}>Video</MusicLinks> : null}

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
