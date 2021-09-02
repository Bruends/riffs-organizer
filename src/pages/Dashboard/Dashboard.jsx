import React from 'react'
import Menu from './components/Menu/Menu'
import Alert from '../../components/molecules/Alerts/Alert'
import DashboardRoutes from './DashboardRoutes'
import { useMusicAPI } from '../../Hooks/useMusicAPI'

function Dashboard() {
  const [musics, setMusics] = React.useState([])
  const [alert, setAlert] = React.useState({ message: null })
  const { apiRequest, apiStates } = useMusicAPI()
  const { error, message } = apiStates

  React.useEffect(() => {
    if (error) setAlert({ type: 'error', message: error.message })

    if (message) setAlert({ ...message })
  }, [message, error])

  return (
    <>
      <Menu />
      <DashboardRoutes
        musics={musics}
        setMusics={setMusics}
        setAlert={setAlert}
        apiRequest={apiRequest}
        apiStates={apiStates}
      />
      <Alert message={alert.message} type={alert.type} />
    </>
  )
}

export default Dashboard
