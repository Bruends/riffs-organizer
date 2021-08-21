import React from 'react'

const useApiCall = () => {
  const [data, setData] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const request = React.useCallback(async (url, options) => {
    let response
    let json
    try {
      setError(null)
      setLoading(true)

      response = await fetch(url, options)
      console.log('---------api call config')
      console.log(options)
      json = await response.json()
      console.log(response)
      console.log(json)
      // console.log(json)
      // erros
      if (json.auth === false) throw new Error(json.error)
      if (!response.ok) {
        console.log(json.error)
        throw new Error(json.error)
      }
    } catch (error) {
      json = null
      console.log(error.message)
      setError(error.message)
    } finally {
      setData(json)
      setLoading(false)
      return json
    }
  }, [])

  return {
    data,
    loading,
    error,
    request,
  }
}

export default useApiCall
