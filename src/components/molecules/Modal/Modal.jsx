import React from 'react'
import {
  ModalBackground,
  ModalWrapper,
  ModalCloseButton,
  ModalContentWrapper,
  ModalImage,
} from './style'

const Modal = ({ isModalOpen, setModalOpen, children, noImg }) => {
  return (
    <ModalBackground isModalOpen={isModalOpen}>
      <ModalWrapper>
        <ModalCloseButton onClick={() => setModalOpen(false)}>
          X
        </ModalCloseButton>
        {noImg ? null : <ModalImage />}

        <ModalContentWrapper>{children}</ModalContentWrapper>
      </ModalWrapper>
    </ModalBackground>
  )
}

export default Modal
