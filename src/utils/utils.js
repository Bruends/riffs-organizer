export const convertToSeconds = (time) => {
  const timeArray = time.split(':')
  const seconds = parseInt(timeArray[0]) * 60 + parseInt(timeArray[1])
  return seconds
}
