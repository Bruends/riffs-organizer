import React from 'react'
import { ContentWrapper } from './style'
import Menu from './components/Menu/Menu'
import AllMusics from './AllMusics/AllMusics'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import EditMusic from './EditMusic/EditMusic'
import DeleteMusic from './DeleteMusic/DeleteMusic'

function Dashboard() {
  let { path } = useRouteMatch()
  const [musics, setMusics] = React.useState([])
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path={path}>
          <ContentWrapper>
            <AllMusics musics={musics} setMusics={setMusics} />
          </ContentWrapper>
        </Route>
        <Route path={`${path}/edit/:id`}>
          <ContentWrapper>
            <EditMusic musics={musics} />
          </ContentWrapper>
        </Route>
        <Route path={`${path}/delete/:id`}>
          <ContentWrapper>
            <DeleteMusic musics={musics} />
          </ContentWrapper>
        </Route>
        <Route path="*">
          <ContentWrapper>
            <spam>404</spam>
          </ContentWrapper>
        </Route>
      </Switch>
    </>
  )
}

export default Dashboard
