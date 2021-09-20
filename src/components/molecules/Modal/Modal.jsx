import React from 'react'
import {
  ModalBackground,
  ModalWrapper,
  ModalContentWrapper,
  ModalImage,
} from './style'

const Modal = ({ isModalOpen, setModalOpen, children, noImg }) => {
  return (
    <ModalBackground isModalOpen={isModalOpen}>
      <ModalWrapper>
        {noImg ? null : <ModalImage />}

        <ModalContentWrapper>{children}</ModalContentWrapper>
      </ModalWrapper>
    </ModalBackground>
  )
}

export default Modal
