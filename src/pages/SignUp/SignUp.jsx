import React from 'react'
import AuthForm from '../../components/organisms/AuthForm/AuthForm'
import useApiCall from '../../Hooks/useApiCall'
//import useLocalStorage from '../../Hooks/useLocalStorage'
import { POST_REGISTER } from '../../utils/apiConfig'

function SignUp() {
  const { request, error } = useApiCall()

  const signup = async (username, email, password) => {
    try {
      const { url, options } = POST_REGISTER(username, email, password)
      const response = await request(url, options)
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }

  return <AuthForm title="Registrar" submit={signup}></AuthForm>
}

export default SignUp
