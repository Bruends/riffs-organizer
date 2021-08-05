import React from 'react'
import AuthForm from '../../components/organisms/AuthForm/AuthForm'
import useApiCall from '../../Hooks/useApiCall'
//import useLocalStorage from '../../Hooks/useLocalStorage'
import { POST_LOGIN } from '../../utils/apiConfig'

function Login() {
  const { request, error } = useApiCall()

  const login = async (username, email, password) => {
    try {
      const { url, options } = POST_LOGIN(username, email, password)
      const { token } = await request(url, options)
      console.log(token)
    } catch (error) {
      console.log(error.message)
    }
  }

  return <AuthForm title="Login" submit={login}></AuthForm>
}

export default Login
