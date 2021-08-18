import styled from 'styled-components'

export const ModalBackground = styled.div`
  display: ${(props) => (props.isModalOpen ? 'block' : 'none')};
  z-index: 20;
  position: fixed;
  min-height: 100vh;
  width: 100vw;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  font-family: var(--main-font);
`

export const ModalWrapper = styled.div`
  width: 43rem;
  height: 35rem;
  background-color: #fff;
  margin: 2rem auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ModalImage = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
  max-width: 25%;
  margin: 0;
  top: 0;
  left: 0;
  padding: 0;
  background-image: url('/imgs/loginBg.jpg');
  background-size: cover;
  background-position-x: center;
`

export const ModalCloseButton = styled.button`
  border: none;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  font-weight: bold;
  background-color: #fff;
  color: #222;
  cursor: pointer;

  &:hover {
    background-color: var(--main-color);
    color: #fff;
    transition: 0.5s;
  }
`

export const ModalContentWrapper = styled.div`
  margin: 2rem;
  position: relative;
  flex: 1;
`
