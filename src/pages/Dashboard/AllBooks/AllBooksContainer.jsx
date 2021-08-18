import React from 'react'
import { useBooksApi } from '../../../Hooks/useBooksApi'
import useLocalStorage from '../../../Hooks/useLocalStorage'
import AllBooks from './AllBooks'
import TopToolBar from '../components/TopToolBar/TopToolBar'

function AllBooksContainer() {
  const { allBooks, addBook, refresh } = useBooksApi()
  const [token] = useLocalStorage('token', '')
  const [books, setBooks] = React.useState([])
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    // pegando livros da api
    const fetchBooks = async (token) => {
      if (token) {
        const apiBooks = await allBooks(token)
        setBooks(apiBooks)
      }
    }
    fetchBooks(token)
  }, [refresh])

  return (
    <>
      <TopToolBar search={search} setSearch={setSearch} addBook={addBook} />
      <AllBooks search={search} setSearch={setSearch} books={books} />
    </>
  )
}

export default AllBooksContainer
