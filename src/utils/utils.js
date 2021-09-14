export const convertToSeconds = (minutes, seconds) => {
  const minutesInSeconds = parseInt(minutes) * 60

  if (minutesInSeconds > 0) return minutesInSeconds + parseInt(seconds)

  return parseInt(seconds)
}
