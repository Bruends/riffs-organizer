import React from 'react'
import Book from '../components/Book/Book'
import { BooksWrapper } from './Style'
import { useBooksApi } from '../../../Hooks/useBooksApi'
import useLocalStorage from '../../../Hooks/useLocalStorage'
import TopToolBar from '../components/TopToolBar/TopToolBar'

function AllBooks() {
  const { allBooks } = useBooksApi()
  const [token] = useLocalStorage('token', '')
  const [books, setBooks] = React.useState([])
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    const fetchBooks = async (token) => {
      if (token) {
        const apiBooks = await allBooks(token)
        setBooks(apiBooks)
      }
    }

    fetchBooks(token)
  }, [])

  return (
    <>
      <TopToolBar search={search} setSearch={setSearch} />
      <BooksWrapper>
        {search
          ? // resultado da pesquisa
            books.map((book) => {
              const title = book.title.toLowerCase()
              if (title.includes(search)) {
                return (
                  <Book
                    key={book._id}
                    title={book.title}
                    description={book.description}
                  />
                )
              }
            })
          : // todos os livros
            books.map((book) => (
              <Book
                key={book._id}
                title={book.title}
                description={book.description}
              />
            ))}
      </BooksWrapper>
    </>
  )
}

export default AllBooks
