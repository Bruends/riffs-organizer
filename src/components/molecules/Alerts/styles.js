import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  to {
    right: 0;
  }
  from {    
    right: -100vw;
  } 
`

export const AlertStyled = styled.div`
  display: ${(props) => (props.showAlert ? 'flex' : 'none')};
  color: #333;
  background-color: #fff;
  padding: 1rem;
  width: 20rem;
  min-height: 4rem;
  position: fixed;
  top: 0;
  right: 0;
  animation: ${animation} 1s;
  animation-fill-mode: forwards;
  border-radius: 8px;
  align-items: center;
  border-bottom: 4px solid var(${(props) => props.color});
`
export const IconWrapper = styled.div`
  background-color: var(${(props) => props.color});
  color: #fff;
  padding: 0.6rem;
  border-radius: 8px;
  font-size: 1.4rem;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;
  color: #222;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
`

export const Message = styled.span`
  padding: 1rem;
`
