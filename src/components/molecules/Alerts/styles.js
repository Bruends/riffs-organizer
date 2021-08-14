import styled, { keyframes } from "styled-components";

const alertbg = {
  success: "--success-color",
  error: "--error-color",
  warning: "--warning-color",
};

const animation = keyframes`
  from {    
    right: -200vw;    
  }

  to {    
    right: 0;    
  }
`;

export const AlertStyled = styled.div`
  font-family: var(--main-font);
  background: var(${({ type }) => alertbg[type]});
  padding: 1rem;
  width: 23rem;
  min-height: 8rem;
  position: fixed;
  bottom: 0;
  color: #fff;
  right: 0;
  opacity: 1;
  animation: ${animation} ease 0.8s;
  animation-fill-mode: forwards;
`;

export const AlertMessage = styled.span``;

export const AlertTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0.2rem;
`;
