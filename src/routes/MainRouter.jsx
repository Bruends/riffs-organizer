import React from 'react'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Dashboard from '../pages/Dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import useAuth from '../Hooks/useAuth'

function MainRouter() {
  const { auth, login, signup, logout, verifyStorageToken } = useAuth()

  React.useEffect(() => {
    verifyStorageToken()
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!auth ? <Login login={login} /> : <Redirect to="/dashboard" />}
        </Route>
        <Route path="/signup">
          <SignUp signup={signup} />
        </Route>
        {/* Rota protegida por autenticação*/}
        <Route path="/dashboard">
          {auth ? <Dashboard logout={logout} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/logout">
          {() => {
            logout()
            return <Redirect to="/" />
          }}
        </Route>
        <Route path="*">
          <p>404</p>
        </Route>
      </Switch>
    </Router>
  )
}

export default MainRouter
