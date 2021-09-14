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

function EditLoops({ loops, _id, modal, setModal, apiRequest }) {
  const [newLoops, setNewLoops] = React.useState([])
  const [title, setTitle] = React.useState('')
  const [startMin, setStartMin] = React.useState(0)
  const [startSec, setStartSec] = React.useState(0)
  const [endMin, setEndMin] = React.useState(0)
  const [endSec, setEndSec] = React.useState(0)

  const handleAddLoop = (event) => {
    event.preventDefault()
    const newLoop = {
      title,
      start: convertToSeconds(startMin, startSec),
      end: convertToSeconds(endMin, endSec),
    }
    setNewLoops([newLoop, ...newLoops])
  }

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
      <Title>Novo Loop</Title>
      <form onSubmit={handleAddLoop}>
        <FlexContainer>
          <div>
            <Input
              label="Título"
              type="text"
              value={title}
              onChange={({ target }) => {
                setTitle(target.value)
              }}
              required
            />
          </div>
          {/* inputs começo do loop */}
          <div>
            <TimeSpan>Começo do Loop: </TimeSpan>
            <TimeContainer>
              <Input
                label="Mins"
                min="0"
                max="59"
                type="number"
                small={true}
                value={startMin}
                onChange={({ target }) => {
                  setStartMin(target.value)
                }}
                required
              />

              <Input
                label="Secs"
                min="0"
                max="59"
                small={true}
                value={startSec}
                onChange={({ target }) => {
                  setStartSec(target.value)
                }}
                type="number"
                step="1"
              />
            </TimeContainer>

            {/* inputs Fim do loop */}
            <TimeSpan>Fim do Loop: </TimeSpan>
            <TimeContainer>
              <Input
                label="Mins"
                min="0"
                max="59"
                type="number"
                small={true}
                value={endMin}
                onChange={({ target }) => {
                  setEndMin(target.value)
                }}
                required
              />

              <Input
                label="Secs"
                min="0"
                max="59"
                small={true}
                value={endSec}
                onChange={({ target }) => {
                  setEndSec(target.value)
                }}
                type="number"
                step="1"
              />
            </TimeContainer>
          </div>
        </FlexContainer>

        <Button type="submit" color="--success-color">
          Adicionar &nbsp;
          <Icon icon={faPlus} />
        </Button>
      </form>

      {newLoops.length > 0 ? (
        <>
          <Title>Deletar Loops</Title>
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

export default EditLoops
