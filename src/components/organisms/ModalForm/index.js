import React from 'react'
import { Title } from './style'

import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import TextArea from '../../../../components/TextArea'

import useApiCall from '../../../../hooks/useApiCall'
import useLocalStorage from '../../../../hooks/useLocalStorage'
import { addProductConfig } from '../../../../utils/apiConfig'

function AddModalForm(props) {
  const [name, setName] = React.useState(null)
  const [price, setPrice] = React.useState(null)
  const [description, setDescription] = React.useState(null)

  const { error, loading, request } = useApiCall()
  const [storage, setStorage] = useLocalStorage()

  const handleSubmit = (event) => {
    event.preventDefault()

    props.submit(name, price, description)
  }

  return (
    <div>
      <Title> {props.title} </Title>
      <form onSubmit={handleSubmit}>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Nome do Produto"
          placeholder="nome do produto"
        ></Input>

        <Input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          label="Preço do Produto"
          placeholder="Preço do produto"
        ></Input>

        <TextArea
          placeholder="Descrição..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></TextArea>

        <Button text={props.buttonTitle} type="submit" />
      </form>
    </div>
  )
}

export default AddModalForm
