import React from 'react'
import Input from '../../../components/molecules/Input/Input'
import Button from '../../../components/atoms/Button/Button'
import Modal from '../../../components/molecules/Modal/Modal'
import { convertToSeconds } from '../../../utils/utils'

// icones font awesome
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

import {
  FlexContainer,
  ButtonWrapper,
  Title,
  TimeContainer,
  TimeSpan,
  DeleteLoopsWrapper,
} from './style'

function DeleteLoop({ loops, _id, modal, setModal, apiRequest }) {
  const [newLoops, setNewLoops] = React.useState([])
  const [title, setTitle] = React.useState('')
  const [startMin, setStartMin] = React.useState(0)
  const [startSec, setStartSec] = React.useState(0)
  const [endMin, setEndMin] = React.useState(0)
  const [endSec, setEndSec] = React.useState(0)

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
      <Title>Deletar Loops</Title>
      {newLoops.length > 0 ? (
        <>
          <DeleteLoopsWrapper>
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

      <ButtonWrapper>
        <Button color="--info-color" onClick={handleSave}>
          Salvar Alterações
        </Button>
        <Button
          onClick={() => {
            setModal(false)
          }}
          color="--error-color"
        >
          Cancelar
        </Button>
      </ButtonWrapper>
    </Modal>
  )
}

export default DeleteLoop
