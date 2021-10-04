import React from 'react'
import { Background, Wrapper, Title, Text, ButtonContainer } from './style'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <Background>
      <Wrapper>
        <Title>Riffs Organizer</Title>
        <Text>
          Organize Suas Músicas, tablaturas e Riffs <br /> e facilite seu
          Aprendizado.
        </Text>
        <ButtonContainer>
          <Link to="/login">Logar</Link>
        </ButtonContainer>
      </Wrapper>
    </Background>
  )
}

export default LandingPage
