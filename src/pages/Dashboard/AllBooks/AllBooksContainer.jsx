import React from 'react'
import { useBooksApi } from '../../../Hooks/useBooksApi'
import { useParams } from 'react-router-dom'
import Book from '../components/Book/Book'
import { BooksWrapper } from './Style'
import TopToolBar from '../components/TopToolBar/TopToolBar'
import AddModalForm from '../../../components/organisms/ModalForm/ModalForm'

function AllBooksContainer({ books, setBooks }) {
  const { allBooks, addBook, refresh } = useBooksApi()
  const [search, setSearch] = React.useState('')
  const [addModal, setaddModal] = React.useState(false)

  const { id } = useParams()

  React.useEffect(() => {
    // pegando livros da api
    const fetchBooks = async () => {
      const apiBooks = await allBooks()
      setBooks(apiBooks)
    }
    fetchBooks()
  }, [refresh])

  return (
    <>
      <AddModalForm
        modalTitle="Novo Livro"
        modal={addModal}
        setModal={setaddModal}
        buttonTitle="Salvar"
        submit={addBook}
      />

      <TopToolBar
        search={search}
        setSearch={setSearch}
        addModal={setaddModal}
      />

      <BooksWrapper>
        {search
          ? // resultado da pesquisa
            books.map((book) => {
              const title = book.title.toLowerCase()
              if (title.includes(search))
                return <Book key={book._id} {...book} />
            })
          : // todos os livros
            books.map((book) => <Book key={book._id} {...book} />)}
      </BooksWrapper>
    </>
  )
}

export default AllBooksContainer
