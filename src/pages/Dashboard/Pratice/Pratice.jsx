import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import EditLoops from '../EditLoops/EditLoops'
import Button from '../../../components/atoms/Button/Button'
import Input from '../../../components/molecules/Input/Input'

// icones font awesome
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlay, faRedo, faPaintBrush } from '@fortawesome/free-solid-svg-icons'

import { ContentWrapper, LoopsContainer, LoopControlContainer } from './style'

function Pratice({ musics, apiRequest, apiStates }) {
  const [music, setMusic] = React.useState({ video: '', loops: [] })
  const [modal, setModal] = React.useState(false)
  const [autoplay, setautoPlay] = React.useState(0)
  const [loop, setLoop] = React.useState({ start: 0, end: 0 })

  const { id } = useParams()

  React.useEffect(() => {
    const foundMusic = musics.filter((music) => music._id == id)
    setMusic(foundMusic[0])
  }, [musics])

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
      <EditLoops
        modal={modal}
        setModal={setModal}
        noImg={true}
        _id={id}
        loops={music.loops}
        apiRequest={apiRequest}
        apiStates={apiStates}
      />

      <ContentWrapper>
        <h1>{music.title}</h1>
        <YouTube
          videoId={music.video.split('=')[1]}
          opts={youtubeOptions}
          onEnd={({ target }) => {
            target.seekTo(loop.start)
          }}
        />

        <Button
          color="--info-color"
          onClick={() => {
            setModal(true)
          }}
        >
          <Icon icon={faPaintBrush} /> &nbsp; Editar Loops
        </Button>

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
