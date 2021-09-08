import React from 'react'
import { ContentWrapper } from './style'
import AllMusics from './AllMusics/AllMusics'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import EditMusic from './EditMusic/EditMusic'
import DeleteMusic from './DeleteMusic/DeleteMusic'
import Pratice from './Pratice/Pratice'

function DashboardRoutes({
  musics,
  setMusics,
  setAlert,
  apiRequest,
  apiStates,
}) {
  let { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path}>
        <ContentWrapper>
          <AllMusics
            musics={musics}
            setMusics={setMusics}
            setAlert={setAlert}
            apiRequest={apiRequest}
            apiStates={apiStates}
          />
        </ContentWrapper>
      </Route>

      <Route path={`${path}/pratice/:id`}>
        <ContentWrapper>
          <Pratice
            musics={musics}
            apiRequest={apiRequest}
            apiStates={apiStates}
          />
        </ContentWrapper>
      </Route>

      <Route path={`${path}/edit/:id`}>
        <ContentWrapper>
          <EditMusic
            updateMusic={apiRequest.updateMusic}
            apiStates={apiStates}
            musics={musics}
          />
        </ContentWrapper>
      </Route>

      <Route path={`${path}/delete/:id`}>
        <ContentWrapper>
          <DeleteMusic deleteMusic={apiRequest.deleteMusic} />
          <AllMusics
            musics={musics}
            setMusics={setMusics}
            setAlert={setAlert}
            apiRequest={apiRequest}
            apiStates={apiStates}
          />
        </ContentWrapper>
      </Route>

      <Route path="*">
        <ContentWrapper>
          <spam>404</spam>
        </ContentWrapper>
      </Route>
    </Switch>
  )
}

export default DashboardRoutes
