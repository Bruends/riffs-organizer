import React from 'react'
import Input from '../../../../components/molecules/Input/Input'
import Button from '../../../../components/atoms/Button/Button'
import Modal from '../../../../components/molecules/Modal/Modal'
import { convertToSeconds } from '../../../../utils/utils'

import {
  FlexContainer,
  ButtonWrapper,
  Title,
  TimeContainer,
  TimeSpan,
} from './style'

function AddLoop({ loops, _id, modal, setModal, apiRequest }) {
  const [title, setTitle] = React.useState('')
  const [startMin, setStartMin] = React.useState(0)
  const [startSec, setStartSec] = React.useState(0)
  const [endMin, setEndMin] = React.useState(0)
  const [endSec, setEndSec] = React.useState(0)

  const handleSave = (event) => {
    event.preventDefault()
    const newLoop = {
      title,
      start: convertToSeconds(startMin, startSec),
      end: convertToSeconds(endMin, endSec),
    }

    apiRequest.updateLoops(_id, [newLoop, ...loops])
    setModal(false)
  }

  return (
    <Modal isModalOpen={modal} setModalOpen={setModal} noImg={true}>
      <Title>Novo Loop</Title>
      <form onSubmit={handleSave}>
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
        {/* Botões salvar e cancelar */}
        <ButtonWrapper>
          <Button type="submit" color="--main-color">
            Adicionar &nbsp;
          </Button>
          <Button
            type="button"
            color="--cancel-color"
            onClick={() => {
              setModal(false)
            }}
          >
            Cancelar &nbsp;
          </Button>
        </ButtonWrapper>
      </form>
    </Modal>
  )
}

export default AddLoop
