import React from 'react'

const useLocalStorage = (key, defaultValue) => {
  // criando state com valor do local storage ou retornando valor padrão
  const [content, setContent] = React.useState(() => {
    const local = window.localStorage.getItem(key)
    return local ? local : defaultValue
  })

  // caso key ou content seja modificado, armazena novo valor
  // ao localStorage
  React.useEffect(() => {
    window.localStorage.setItem(key, content)
  }, [key, content])

  return [content, setContent]
}

export default useLocalStorage
