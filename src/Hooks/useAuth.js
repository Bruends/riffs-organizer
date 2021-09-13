import React from 'react'
import useApiCall from './useApiCall'
import useLocalStorage from './useLocalStorage'
import { POST_LOGIN } from '../utils/apiConfig'

const useAuth = () => {
  const [auth, setAuth] = React.useState(false)
  const [storage, setStorage] = useLocalStorage('token', '')

  const { request, error } = useApiCall()

  const login = React.useCallback(async (username, password) => {
    try {
      // objeto de configuração de chamada de api
      const { url, options } = POST_LOGIN(username, password)
      const { token } = await request(url, options)

      if (!error) {
        setStorage(token)
        setAuth(true)
      }
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  const logout = () => {
    setStorage('')
    setAuth(false)
  }

  // verifica se já possui uma token salva
  const verifyStorageToken = () => {
    if (storage) setAuth(true)
  }

  return {
    auth,
    login,
    logout,
    verifyStorageToken,
  }
}

export default useAuth
