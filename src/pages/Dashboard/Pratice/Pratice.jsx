import React from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'

function Pratice({ musics }) {
  const [music, setMusic] = React.useState({ video: '', loops: [] })
  const [start, setStart] = React.useState(0)
  const [autoplay, setautoPlay] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  const [loop, setLoop] = React.useState({ title: 'intro', start: 0, end: 0 })
  const { id } = useParams()

  React.useEffect(() => {
    const foundMusic = musics.filter((music) => music._id == id)
    setMusic(foundMusic[0])

    console.log(id)
    console.log(foundMusic)
  }, [])

  console.log(id)

  const opts = {
    height: '290',
    width: '540',
    playerVars: {
      autoplay,
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
    <div>
      <YouTube
        videoId={music.video.split('=')[1]}
        opts={opts}
        onEnd={({ target }) => {
          target.seekTo(loop.start)
        }}
      />

      <div>
        <h1>{music.title}</h1>
        Loops:
        {music.loops.map((loop, i) => (
          <button
            onClick={() => {
              handleSetLoop(i)
            }}
            key={i}
          >
            {loop.title}
          </button>
        ))}
      </div>

      <div>
        <h2>Adicionar Loop</h2>
        <form>
          <input
            type="Number"
            value={start}
            onChange={({ target }) => {
              setStart(target.value)
            }}
          />
          <input
            type="Number"
            value={end}
            onChange={({ target }) => {
              setEnd(target.value)
            }}
          />
          <button type="Submit">Salvar Loop</button>
        </form>
      </div>
    </div>
  )
}

export default Pratice
