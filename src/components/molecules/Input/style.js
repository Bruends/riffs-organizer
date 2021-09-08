import styled from 'styled-components'

export const LabelStyle = styled.label`
  display: block;
  margin-top: 0.8rem;
`

export const InputStyle = styled.input`
  display: block;
  padding: 9px;
  box-shadow: none;
  outline: none;
  border: none;
  width: 100%;
  background: var(--dash-bg);
  margin: 0.2rem auto;
  border: 2px solid var(--dash-bg);
  font-size: 1.05rem;
  border-bottom: 2px solid var(--main-color);
  color: #fff;

  :focus {
    border-bottom: 3px solid var(--main-color);
  }
`

export const ErrorSpan = styled.span`
  display: block;
  color: var(--error-color);
  margin: 0.4rem 0;
`
