const log = (title, type, logs) => {
  console.group(title)
  switch (type) {
    case 'table':
      console.table(logs)
      break
    case 'array':
      logs.forEach((log) => {
        console.log(log)
      })
      break
    case 'error':
      console.error(log)
      break
    default:
      console.log(log)
      break
  }
  console.groupEnd()
}

export default log
