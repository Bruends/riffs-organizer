import React from 'react'
import log from '../utils/log'
import useLocalStorage from './useLocalStorage'

const useApiCall = () => {
  const [data, setData] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [token, setToken] = useLocalStorage('token', '')

  const request = React.useCallback(async (url, options) => {
    let response
    let json
    try {
      setError(null)
      setLoading(true)

      response = await fetch(url, options)
      json = await response.json()

      log('api call', 'array', [url, options, response])
      log('api call resposta', 'table', json)

      if (json.auth === false) setToken('')

      if (!response.ok) throw new Error(json.error)
    } catch (error) {
      json = null
      log('api error', 'error', error)
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
