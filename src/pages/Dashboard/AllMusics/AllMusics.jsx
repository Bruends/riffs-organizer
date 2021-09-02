import React from 'react'
import { ContentWrapper } from './Style'
import TopToolBar from '../components/TopToolBar/TopToolBar'
import AddModalForm from '../../../components/organisms/ModalForm/ModalForm'
import { useMusicAPI } from '../../../Hooks/useMusicAPI'
import Music from '../components/Music/Music'

function AllMusics({ musics, setMusics }) {
  const [search, setSearch] = React.useState('')
  const [addModal, setaddModal] = React.useState(false)

  const { allMusics, addMusic, refresh } = useMusicAPI()

  React.useEffect(() => {
    // const fetchMusics = async () => {
    //   const apiMusics = await allMusics()
    //   setMusics(apiMusics)
    // }
    // fetchMusics()
  }, [refresh])

  return (
    <>
      <AddModalForm
        modalTitle="Nova Música"
        modal={addModal}
        setModal={setaddModal}
        submit={addMusic}
        buttonTitle="Salvar"
      />

      <TopToolBar
        search={search}
        setSearch={setSearch}
        addModal={setaddModal}
      />

      <ContentWrapper>
        {search
          ? // resultado da pesquisa
            musics.map((music) => {
              if (music.title.includes(search))
                return <Music key={music._id} {...music} />
            })
          : // todos as musicas
            musics.map((music) => <Music key={music._id} {...music} />)}
      </ContentWrapper>
    </>
  )
}

export default AllMusics
