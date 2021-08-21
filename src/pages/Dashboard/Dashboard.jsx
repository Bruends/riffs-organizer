import React from 'react'
import { ContentWrapper } from './style'
import Menu from './components/Menu/Menu'
import AllBooksContainer from './AllBooks/AllBooksContainer'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import EditBook from './EditBook/EditBook'

function Dashboard() {
  let { path, url } = useRouteMatch()
  const [books, setBooks] = React.useState([])
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path={path}>
          <ContentWrapper>
            <AllBooksContainer books={books} setBooks={setBooks} />
          </ContentWrapper>
        </Route>
        <Route path={`${path}/edit/:id`}>
          <ContentWrapper>
            <EditBook books={books} />
          </ContentWrapper>
        </Route>
        <Route path="*">
          <ContentWrapper>
            <p>404</p>
          </ContentWrapper>
        </Route>
      </Switch>
    </>
  )
}

export default Dashboard
