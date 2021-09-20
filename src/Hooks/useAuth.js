import React from 'react'
import useApiCall from './useApiCall'
import useLocalStorage from './useLocalStorage'
import { POST_LOGIN, POST_REGISTER } from '../utils/apiConfig'
import { toast } from 'react-toastify'

const useAuth = () => {
  const [auth, setAuth] = React.useState(false)
  const [storage, setStorage] = useLocalStorage('token', '')

  const { request, apiErrorMessage } = useApiCall()

  const login = React.useCallback(async (username, password) => {
    try {
      // objeto de configuração de chamada de api
      const { url, options } = POST_LOGIN(username, password)
      const { token, error } = await request(url, options)

      console.log('useAuth: ' + apiErrorMessage)

      if (error) {
        toast.error(error)
        return
      }

      setStorage(token)
      setAuth(true)
    } catch (error) {
      toast.error('erro ao Logar')
    }
  }, [])

  const signup = async (username, email, password) => {
    try {
      const { url, options } = POST_REGISTER(username, email, password)
      const { error } = await request(url, options)

      if (error) {
        toast.error(apiErrorMessage)
        return
      }

      toast.success('Registrado com Sucesso !')
    } catch (error) {
      console.log(error.message)
      toast.error('erro ao Registrar')
    }
  }

  const logout = () => {
    setStorage('')
    setAuth(false)
  }

  // verifica se já possui um token salvo
  const verifyStorageToken = () => {
    if (storage) setAuth(true)
  }

  return {
    auth,
    signup,
    login,
    logout,
    verifyStorageToken,
  }
}

export default useAuth
