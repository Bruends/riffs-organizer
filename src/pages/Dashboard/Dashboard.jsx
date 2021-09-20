import React from 'react'
import Menu from './components/Menu/Menu'
import DashboardRoutes from './DashboardRoutes'
import { useMusicAPI } from '../../Hooks/useMusicAPI'

function Dashboard() {
  const [musics, setMusics] = React.useState([])
  const { apiRequest, apiStates } = useMusicAPI()
  const { error, message } = apiStates

  React.useEffect(() => {}, [message, error])

  return (
    <>
      <Menu />
      <DashboardRoutes
        musics={musics}
        setMusics={setMusics}
        apiRequest={apiRequest}
        apiStates={apiStates}
      />
    </>
  )
}

export default Dashboard
