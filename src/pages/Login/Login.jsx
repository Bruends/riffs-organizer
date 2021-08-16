import React from 'react'
import AuthForm from '../../components/organisms/AuthForm/AuthForm'
import useApiCall from '../../Hooks/useApiCall'
import useLocalStorage from '../../Hooks/useLocalStorage'
import { POST_LOGIN } from '../../utils/apiConfig'

function Login({ login }) {
  return <AuthForm title="Login" submit={login}></AuthForm>
}

export default Login
