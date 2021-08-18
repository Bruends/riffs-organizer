import React from 'react'
import Book from '../components/Book/Book'
import { BooksWrapper } from './Style'

function AllBooks({ search, books }) {
  return (
    <>
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
