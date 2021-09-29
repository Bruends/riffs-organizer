import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import AddLoop from '../components/AddLoop/AddLoop'
import DeleteLoop from '../components/DeleteLoop/DeleteLoop'
import Button from '../../../components/atoms/Button/Button'

// icones font awesome
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faGuitar,
  faRedo,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

import { ContentWrapper, LoopsContainer } from './style'

function Pratice({ apiRequest, apiStates }) {
  const [music, setMusic] = React.useState({ video: '', loops: [] })
  const [addLoopModal, setAddLoopModal] = React.useState(false)
  const [deleteLoopModal, setDeleteLoopModal] = React.useState(false)
  const [autoplay, setautoPlay] = React.useState(0)
  const [loop, setLoop] = React.useState({ start: 0, end: 0 })

  const { id } = useParams()

  React.useEffect(async () => {
    const musics = await apiRequest.allMusics()
    const foundMusic = musics.filter((music) => music._id == id)
    setMusic(foundMusic[0])
  }, [addLoopModal, deleteLoopModal])

  console.log(id)

  const youtubeOptions = {
    height: '260',
    width: '510',
    playerVars: {
      autoplay: autoplay,
      start: loop.start,
      end: loop.end,
    },
  }

  const handleSetLoop = (i) => {
    setLoop(music.loops[i])
    setautoPlay(1)
    console.log(music)
  }

  return (
    <>
      <AddLoop
        modal={addLoopModal}
        setModal={setAddLoopModal}
        noImg={true}
        _id={id}
        loops={music.loops}
        apiRequest={apiRequest}
        apiStates={apiStates}
      />

      <DeleteLoop
        modal={deleteLoopModal}
        setModal={setDeleteLoopModal}
        noImg={true}
        _id={id}
        loops={music.loops}
        apiRequest={apiRequest}
        apiStates={apiStates}
      />

      <ContentWrapper>
        {/* Video */}
        <h1>{music.title}</h1>
        <YouTube
          videoId={music.video.split('=')[1]}
          opts={youtubeOptions}
          onEnd={({ target }) => {
            target.seekTo(loop.start)
          }}
        />

        {/* Botões de Tablatura e adição e remoção de Loops */}
        <div>
          {music.tab ? (
            <a target="_blank" href={music.tab} color="--main-color">
              <Icon icon={faGuitar} /> &nbsp; Tablatura
            </a>
          ) : null}

          <Button
            color="--main-color"
            onClick={() => {
              setAddLoopModal(true)
            }}
          >
            <Icon icon={faPlus} /> &nbsp; Adicionar Loop
          </Button>
          {music.loops.length > 0 ? (
            <Button
              color="--error-color"
              onClick={() => {
                setDeleteLoopModal(true)
              }}
            >
              <Icon icon={faTrash} /> &nbsp; Deletar Loops
            </Button>
          ) : null}
        </div>

        {/* Loops */}
        {music.loops.length > 0 ? (
          <div>
            <LoopsContainer>
              <spam>Loops:</spam>
              {music.loops.map((loop, i) => (
                <Button
                  key={i}
                  onClick={() => {
                    handleSetLoop(i)
                  }}
                >
                  <Icon icon={faRedo} /> &nbsp;
                  {loop.title}
                </Button>
              ))}
            </LoopsContainer>
          </div>
        ) : null}
      </ContentWrapper>
    </>
  )
}

export default Pratice
