import React from 'react'
import { ContentWrapper } from './style'
import Menu from './components/Menu/Menu'
import AllBooks from './AllBooks/AllBooks'

function Dashboard(props) {
  return (
    <>
      <Menu />
      <ContentWrapper>
        <AllBooks />
      </ContentWrapper>
    </>
  )
}

export default Dashboard
