import styled from 'styled-components'

export const LabelStyle = styled.label`
  display: block;
  margin-bottom: 0.2rem;
`

export const InputStyle = styled.input`
  display: block;
  padding: 0.5rem 0.6rem;
  margin-bottom: 1rem;
  width: 100%;
  border: 1px solid #555;
  border-radius: 5px;

  &:focus {
    border: 1px solid var(--main-color);
    outline: none;
  }
`
