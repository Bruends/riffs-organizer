export const convertToSeconds = (minutes, seconds) => {
  const minutesInSeconds = parseInt(minutes) * 60

  if (minutesInSeconds > 0) return minutesInSeconds + parseInt(seconds)

  return parseInt(seconds)
}

export const caseInsensitiveSearch = (search, content) => {
  const searchLoweCase = search.toLowerCase()
  const contentLowerCase = content.toLowerCase()

  return contentLowerCase.includes(searchLoweCase)
}
