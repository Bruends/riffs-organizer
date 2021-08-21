import React from 'react'
import { Title } from './style'
import Input from '../../molecules/Input/Input'
import Button from '../../../components/atoms/Button/Button'
import TextArea from '../../atoms/TextArea/TextArea'
import Modal from '../../molecules/Modal/Modal'

function ModalForm(props) {
  const [_id, setId] = React.useState('old')
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  React.useEffect(() => {
    if (props.book) {
      console.log(props.book)
      setId(props.book._id)
      setTitle(props.book.title)
      setDescription(props.book.description)
    }
    console.log(props.book)
  }, [props.book])

  const handleSubmit = async (event) => {
    event.preventDefault()
    await props.submit({ _id, title, description })
  }

  return (
    <Modal isModalOpen={props.modal} setModalOpen={props.setModal}>
      <Title> {props.modalTitle} </Title>
      <form onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder="Título do livro"
          required
          readOnly={props.readOnly}
        ></Input>

        <TextArea
          placeholder="Descrição..."
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          required
          readOnly={props.readOnly}
        ></TextArea>

        <Button value={props.buttonTitle} type="submit" />
      </form>
    </Modal>
  )
}

export default ModalForm
