import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { ContentWrapper, Wrapper } from './Style'
import TopToolBar from '../components/TopToolBar/TopToolBar'
import AddModalForm from '../../../components/organisms/ModalForm/ModalForm'
import Music from '../components/Music/Music'
import { caseInsensitiveSearch } from '../../../utils/utils'

function AllMusics({ musics, setMusics, apiRequest, apiStates }) {
  const [search, setSearch] = React.useState('')
  const [addModal, setaddModal] = React.useState(false)

  React.useEffect(() => {
    const fetchMusics = async () => {
      const apiMusics = await apiRequest.allMusics()
      if (apiMusics) {
        setMusics(apiMusics)
      }
    }
    fetchMusics()
  }, [apiStates.refresh])

  return (
    <section>
      {/* Modal */}
      <AddModalForm
        modalTitle="Nova Música"
        modal={addModal}
        setModal={setaddModal}
        submit={apiRequest.addMusic}
        buttonTitle="Salvar"
      />
      <Wrapper>
        {/* pesquisa e botão adicionar  */}
        <TopToolBar
          search={search}
          setSearch={setSearch}
          addModal={setaddModal}
        />
        {/* Container Musicas */}

        <main>
          <ContentWrapper>
            {search
              ? // resultado da pesquisa
                musics.map((music) => {
                  if (caseInsensitiveSearch(search, music.title))
                    return <Music key={music._id} {...music} />
                })
              : // todas as musicas
                musics.map((music) => <Music key={music._id} {...music} />)}
          </ContentWrapper>
        </main>
      </Wrapper>
    </section>
  )
}

export default AllMusics
