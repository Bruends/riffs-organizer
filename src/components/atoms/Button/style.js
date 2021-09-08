import styled from 'styled-components'

export const ButtonStyle = styled.button`
  display: block;
  padding: 0.6rem 1rem;
  background-color: var(${({ color }) => (color ? color : '--main-color')});
  color: #fff;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  margin: 0.1rem;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`
