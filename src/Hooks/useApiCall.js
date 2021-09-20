import React from 'react'
import log from '../utils/log'
import useLocalStorage from './useLocalStorage'

const useApiCall = () => {
  const [data, setData] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [apiErrorMessage, setApiErrorMessage] = React.useState(null)
  const [token, setToken] = useLocalStorage('token', '')

  const request = React.useCallback(async (url, options) => {
    let response
    let json
    try {
      setApiErrorMessage(null)
      setLoading(true)

      response = await fetch(url, options)
      json = await response.json()

      if (json.auth === false) setToken('')

      if (!response.ok) {
        setApiErrorMessage(json.error)
      }

      log('response', 'table', response)
    } catch (error) {
      json = null
      log('Erro na Requisição Api', 'error', error.headers.status)
    } finally {
      setData(json)
      setLoading(false)
      return json
    }
  }, [])

  return {
    data,
    loading,
    apiErrorMessage,
    request,
  }
}

export default useApiCall
