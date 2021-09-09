import React from 'react'
import Modal from '../../../components/molecules/Modal/Modal'
import { useParams } from 'react-router-dom'
import Button from '../../../components/atoms/Button/Button'
import { useHistory } from 'react-router-dom'

import { ButtonsWrapper, Title } from './style'

function DeleteMusic({ deleteMusic }) {
  const [modal, setModal] = React.useState(true)

  const { id } = useParams()
  let history = useHistory()

  const handleDelete = async () => {
    await deleteMusic(id)
    history.push('/dashboard')
  }

  const handleCancel = () => {
    setModal(false)
    history.push('/dashboard')
  }

  return (
    <Modal isModalOpen={modal} setModalOpen={setModal} noImg={true}>
      <div>
        <Title>Deletar Musica ?</Title>
        <ButtonsWrapper>
          <Button color="--error-color" onClick={handleDelete}>
            Deletar
          </Button>
          <Button onClick={handleCancel}>Cancelar</Button>
        </ButtonsWrapper>
      </div>
    </Modal>
  )
}

export default DeleteMusic
