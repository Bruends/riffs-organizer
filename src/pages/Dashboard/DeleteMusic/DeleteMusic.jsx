import React from 'react'
import Modal from '../../../components/molecules/Modal/Modal'
import { useParams } from 'react-router-dom'
import { useMusicAPI } from '../../../Hooks/useMusicAPI'
import Button from '../../../components/atoms/Button/Button'
import { useHistory } from 'react-router-dom'

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
        <Button value="Deletar" onClick={handleDelete} />
      </div>
    </Modal>
  )
}

export default DeleteMusic
