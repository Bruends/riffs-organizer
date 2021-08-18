import React from 'react'
import { ContentWrapper } from './style'
import Menu from './components/Menu/Menu'
import AllBooksContainer from './AllBooks/AllBooksContainer'
import ModalForm from '../../components/organisms/ModalForm/ModalForm'
import Modal from '../../components/molecules/Modal/Modal'

function Dashboard() {
  return (
    <>
      <Menu />
      <ContentWrapper>
        <AllBooksContainer />
      </ContentWrapper>
    </>
  )
}

export default Dashboard
