const findMusic = (musics, id) => {
  const foundMusic = musics.filter((music) => music._id == id)
  console.log(id)
  console.log(foundMusic)
  return foundMusic[0]
}

export default findMusic
