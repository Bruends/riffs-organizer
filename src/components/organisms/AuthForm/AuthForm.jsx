import React from 'react'
import Input from '../../../components/molecules/Input/Input'
import Button from '../../../components/atoms/Button/Button'

function AuthForm({ title, submit }) {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    submit(username, email, password)
  }

  return (
    <section>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          title="Username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          id="username"
          required
        ></Input>

        <Input
          title="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          id="email"
          type="email"
          required
        ></Input>

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          title="Senha"
          type="password"
          required
        ></Input>

        <Button type="submit" value="logar" />
      </form>
    </section>
  )
}

export default AuthForm
