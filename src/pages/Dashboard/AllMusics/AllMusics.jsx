import React from 'react'
import { ContentWrapper, Wrapper } from './Style'
import TopToolBar from '../components/TopToolBar/TopToolBar'
import AddModalForm from '../../../components/organisms/ModalForm/ModalForm'
import Music from '../components/Music/Music'

function AllMusics({ musics, setMusics, apiRequest, apiStates }) {
  const [search, setSearch] = React.useState('')
  const [addModal, setaddModal] = React.useState(false)

  React.useEffect(() => {
    const fetchMusics = async () => {
      const apiMusics = await apiRequest.allMusics()
      if (apiMusics) setMusics(apiMusics)
    }
    fetchMusics()
  }, [apiStates.refresh])

  return (
    <>
      <AddModalForm
        modalTitle="Nova Música"
        modal={addModal}
        setModal={setaddModal}
        submit={apiRequest.addMusic}
        buttonTitle="Salvar"
      />
      <Wrapper>
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
      </Wrapper>
    </>
  )
}

export default AllMusics
