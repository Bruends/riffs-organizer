import React from 'react'
import { Title } from './style'

import Input from '../../molecules/Input/Input'
import Button from '../../../components/atoms/Button/Button'
import TextArea from '../../atoms/TextArea/TextArea'
import useLocalStorage from '../../../Hooks/useLocalStorage'

function ModalForm(props) {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [token] = useLocalStorage('token', '')

  const handleSubmit = (event) => {
    event.preventDefault()
    props.submit(token, title, description)
  }

  return (
    <div>
      <Title> {props.title} </Title>
      <form onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder="Título do livro"
          required
        ></Input>

        <TextArea
          placeholder="Descrição..."
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          required
        ></TextArea>

        <Button value={props.buttonTitle} type="submit" />
      </form>
    </div>
  )
}

export default ModalForm
