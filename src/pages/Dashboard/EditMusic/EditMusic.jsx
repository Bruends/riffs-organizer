import React from 'react'
import EditModalForm from '../../../components/organisms/ModalForm/ModalForm'
import { useParams } from 'react-router-dom'
import { useMusicAPI } from '../../../Hooks/useMusicAPI'

function EditMusic({ musics }) {
  const [modal, setModal] = React.useState(true)
  const { updateMusic } = useMusicAPI()
  const [music, setMusic] = React.useState(null)
  const { id } = useParams()

  console.log(id)

  React.useEffect(() => {
    const foundMusic = musics.filter((music) => music._id == id)
    setMusic(foundMusic[0])
  }, [])

  return (
    <EditModalForm
      modalTitle="Editar Livro"
      modal={modal}
      setModal={setModal}
      buttonTitle="Salvar"
      submit={updateMusic}
      music={music}
    />
  )
}

export default EditMusic
