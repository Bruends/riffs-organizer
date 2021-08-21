import React from 'react'
import EditModalForm from '../../../components/organisms/ModalForm/ModalForm'
import { useParams } from 'react-router-dom'
import { useBooksApi } from '../../../Hooks/useBooksApi'

function EditBook({ books }) {
  const [modal, setModal] = React.useState(true)
  const { editBook } = useBooksApi()
  const [book, setBook] = React.useState(null)
  const { id } = useParams()

  console.log(id)

  React.useEffect(() => {
    const fetchBook = async () => {
      const foundBook = books.filter((b) => b._id == id)
      setBook(foundBook[0])
    }
    fetchBook()
  }, [])

  return (
    <EditModalForm
      modalTitle="Editar Livro"
      modal={modal}
      setModal={setModal}
      buttonTitle="Salvar"
      submit={editBook}
      book={book}
    />
  )
}

export default EditBook
