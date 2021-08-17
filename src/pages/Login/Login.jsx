import React from 'react'
import AuthForm from '../../components/organisms/AuthForm/AuthForm'

function Login({ login }) {
  return <AuthForm title="Login" submit={login}></AuthForm>
}

export default Login
