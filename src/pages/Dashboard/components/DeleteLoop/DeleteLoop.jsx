import React from 'react'
import Button from '../../../../components/atoms/Button/Button'
import Modal from '../../../../components/molecules/Modal/Modal'

// icones font awesome
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { ButtonWrapper, Title, DeleteLoopsWrapper } from './style'

function DeleteLoop({ loops, _id, modal, setModal, apiRequest }) {
  const [newLoops, setNewLoops] = React.useState([])

  const deleteLoop = (loopIndex) => {
    const removeLoop = newLoops[loopIndex]
    const loopsAfterRemove = newLoops.filter((loop) => loop != removeLoop)
    setNewLoops(loopsAfterRemove)
  }

  const handleSave = () => {
    apiRequest.updateLoops(_id, newLoops)
    setModal(false)
  }

  React.useEffect(() => {
    setNewLoops(loops)
  }, [loops, modal])

  return (
    <Modal isModalOpen={modal} setModalOpen={setModal} noImg={true}>
      <Title>Escolha os Loops para deletar</Title>
      {newLoops.length > 0 ? (
        <>
          <DeleteLoopsWrapper>
            {/* Loops */}
            {newLoops.map((loop, i) => (
              <Button
                key={i}
                color="--error-color"
                onClick={() => {
                  deleteLoop(i)
                }}
              >
                {loop.title} &nbsp;
                <Icon icon={faTrash} />
              </Button>
            ))}
          </DeleteLoopsWrapper>
        </>
      ) : null}

      {/* Botões de salvar e cancelar */}
      <ButtonWrapper>
        <Button color="--info-color" onClick={handleSave}>
          Salvar Alterações
        </Button>
        <Button
          onClick={() => {
            setModal(false)
          }}
          color="--cancel-color"
        >
          Cancelar
        </Button>
      </ButtonWrapper>
    </Modal>
  )
}

export default DeleteLoop
