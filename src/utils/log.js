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
      console.error(logs)
      break
    default:
      console.log(logs)
      break
  }
  console.groupEnd()
}

export default log
