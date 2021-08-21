import React from 'react'
import DeleteModalForm from '../../../components/organisms/ModalForm/ModalForm'
import { useParams } from 'react-router-dom'
import { useBooksApi } from '../../../Hooks/useBooksApi'

function DeleteBook({ books }) {
  const [modal, setModal] = React.useState(true)
  const { deleteBook } = useBooksApi()
  const [book, setBook] = React.useState(null)
  const { id } = useParams()

  React.useEffect(() => {
    const fetchBook = async () => {
      const foundBook = books.filter((b) => b._id == id)
      setBook(foundBook[0])
    }
    fetchBook()
  }, [])

  return (
    <DeleteModalForm
      modalTitle="Apagar Livro"
      modal={modal}
      setModal={setModal}
      buttonTitle="Deletar"
      submit={deleteBook}
      book={book}
      readOnly={true}
    />
  )
}

export default DeleteBook
