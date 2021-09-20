import React from 'react'
import { Title, ButtonWrapper } from './style'
import Input from '../../molecules/Input/Input'
import Button from '../../../components/atoms/Button/Button'
import Modal from '../../molecules/Modal/Modal'
import { useHistory } from 'react-router-dom'

function ModalForm({ music, submit, modal, setModal, modalTitle }) {
  const [_id, setId] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [tab, setTab] = React.useState('')
  const [video, setVideo] = React.useState('')
  let history = useHistory()

  React.useEffect(() => {
    if (music) {
      setId(music._id)
      setTitle(music.title)
      setTab(music.tab)
      setVideo(music.video)
    }
  }, [music])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newMusic = {
      title,
      tab,
      video,
    }
    if (_id) newMusic._id = _id
    await submit(newMusic)
    setModal(false)
    history.push('/dashboard')
  }

  const handleCancel = (event) => {
    event.preventDefault()
    setModal(false)
    history.push('/dashboard')
  }

  return (
    <Modal isModalOpen={modal} setModalOpen={setModal}>
      <Title> {modalTitle} </Title>
      <form onSubmit={handleSubmit}>
        <Input
          label="Título: "
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          required
        />

        <Input
          label="Vídeo do Youtube: "
          value={video}
          onChange={({ target }) => setVideo(target.value)}
          required
        />

        <Input
          label="Tablatura: "
          value={tab}
          onChange={({ target }) => setTab(target.value)}
        />

        <ButtonWrapper>
          <Button type="submit">salvar</Button>
          <Button color="--error-color" onClick={handleCancel}>
            Cancelar
          </Button>
        </ButtonWrapper>
      </form>
    </Modal>
  )
}

export default ModalForm
