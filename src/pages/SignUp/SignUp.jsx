import React from 'react'
import AuthForm from '../../components/organisms/AuthForm/AuthForm'

function SignUp({ signup }) {
  return <AuthForm title="Registrar" type="register" submit={signup}></AuthForm>
}

export default SignUp
