import styled from 'styled-components'

export const ButtonStyle = styled.button`
  display: block;
  padding: 0.8rem 1rem;
  background-color: var(--main-color);
  color: #fff;
  box-shadow: none;
  border: none;
  border-radius: 5px;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`
