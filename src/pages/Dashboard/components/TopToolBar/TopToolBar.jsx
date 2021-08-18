import React from 'react'
import Input from '../../../../components/molecules/Input/Input'
import Button from '../../../../components/atoms/Button/Button'
import { Wrapper } from './style.js'
import ModalForm from '../../../../components/organisms/ModalForm/ModalForm'
import Modal from '../../../../components/molecules/Modal/Modal'

function TopToolBar({ search, setSearch, addBook }) {
  const [modal, setModal] = React.useState(true)

  return (
    <>
      <Modal isModalOpen={modal} setModalOpen={setModal}>
        <ModalForm
          title="Novo Livro"
          buttonTitle="Salvar Livro"
          submit={addBook}
        />
      </Modal>

      <Wrapper>
        <Input
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Pesquisar por título..."
          value={search}
        />
        <Button value="Adicionar" onClick={() => setModal(true)} />
      </Wrapper>
    </>
  )
}

export default TopToolBar
