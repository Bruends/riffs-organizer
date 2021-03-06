import React from 'react'
import Input from '../../../components/molecules/Input/Input'
import Button from '../../../components/atoms/Button/Button'
import {
  FormContainer,
  ButtonLinkWrapper,
  LoginContainer,
  LoginLeftBg,
} from './style'
import { Link } from 'react-router-dom'

function AuthForm({ title, submit, type }) {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (type == 'register') {
      submit(username, email, password)
    } else {
      submit(username, password)
    }
  }

  return (
    <LoginContainer>
      <LoginLeftBg />

      <FormContainer>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit}>
          {/* input de nome apenas na pg de registro */}
          {type === 'register' ? (
            <Input
              label="Email: "
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              id="email"
              type="email"
              required
            />
          ) : null}

          <Input
            label="Usuário: "
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            id="username"
            required
          />

          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Senha: "
            type="password"
            minlength="8"
            required
          />

          <ButtonLinkWrapper>
            <Button type="submit">{title}</Button>

            {type === 'register' ? (
              <Link to="/login">Logar</Link>
            ) : (
              <Link to="/signup">Registrar</Link>
            )}
          </ButtonLinkWrapper>
        </form>
      </FormContainer>
    </LoginContainer>
  )
}

export default AuthForm
