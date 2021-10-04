const findMusic = (musics, id) => {
  const foundMusic = musics.filter((music) => music._id == id)
  return foundMusic[0]
}

export default findMusic
