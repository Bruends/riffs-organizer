import React from 'react'
import Menu from './components/Menu/Menu'
import { ContentWrapper } from './style'
function Dashboard(props) {
  return (
    <>
      <Menu />
      <ContentWrapper>
        <div>dash</div>
        <button onClick={props.logout}>Logout</button>
      </ContentWrapper>
    </>
  )
}

export default Dashboard
