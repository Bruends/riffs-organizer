import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import EditLoops from '../EditLoops/EditLoops'
import Button from '../../../components/atoms/Button/Button'

function Pratice({ musics, apiRequest, apiStates }) {
  const [music, setMusic] = React.useState({ video: '', loops: [] })
  const [modal, setModal] = React.useState(false)
  const [autoplay, setautoPlay] = React.useState(0)
  const [loop, setLoop] = React.useState({ title: 'intro', start: 0, end: 100 })
  const { id } = useParams()

  React.useEffect(() => {
    const foundMusic = musics.filter((music) => music._id == id)
    setMusic(foundMusic[0])
  }, [musics])

  console.log(id)

  const youtubeOptions = {
    height: '250',
    width: '500',
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

      <YouTube
        videoId={music.video.split('=')[1]}
        opts={youtubeOptions}
        onEnd={({ target }) => {
          target.seekTo(loop.start)
        }}
      />

      <div>
        <h1>{music.title}</h1>
        Loops:
        {music.loops.map((loop, i) => (
          <Button
            key={i}
            onClick={() => {
              handleSetLoop(i)
            }}
          >
            {loop.title}
          </Button>
        ))}
        <Button
          color="--info-color"
          onClick={() => {
            setModal(true)
          }}
        >
          Editar Loops
        </Button>
      </div>
    </>
  )
}

export default Pratice
