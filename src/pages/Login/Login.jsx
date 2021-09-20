import React from 'react'
import AuthForm from '../../components/organisms/AuthForm/AuthForm'

import 'react-toastify/dist/ReactToastify.css'

function Login({ login }) {
  return <AuthForm title="Login" submit={login}></AuthForm>
}

export default Login
