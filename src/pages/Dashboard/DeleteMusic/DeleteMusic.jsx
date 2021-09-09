import React from 'react'
import Modal from '../../../components/molecules/Modal/Modal'
import { useParams } from 'react-router-dom'
import Button from '../../../components/atoms/Button/Button'
import { useHistory } from 'react-router-dom'

import { ButtonsWrapper } from './style'

function DeleteMusic({ deleteMusic }) {
  const [modal, setModal] = React.useState(true)

  const { id } = useParams()
  let history = useHistory()

  const handleDelete = async () => {
    await deleteMusic(id)
    history.push('/dashboard')
  }

  return (
    <Modal isModalOpen={modal} setModalOpen={setModal} noImg={true}>
      <div>
        <h1>Deletar Musica ?</h1>
        <ButtonsWrapper>
          <Button color="--error-color" onClick={handleDelete}>
            Deletar
          </Button>
          <Button onClick={handleDelete}>Cancelar</Button>
        </ButtonsWrapper>
      </div>
    </Modal>
  )
}

export default DeleteMusic
