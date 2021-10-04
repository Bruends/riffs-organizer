import styled from 'styled-components'

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background-color: var(${({ color }) => (color ? color : '--main-color')});
  color: #fff;
  font-weight: bold;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  margin: 0.1rem;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`
