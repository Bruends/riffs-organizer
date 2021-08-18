import React from 'react'
import useApiCall from './useApiCall'
import { GET_BOOKS, POST_ADDBOOK } from '../utils/apiConfig'

export const useBooksApi = () => {
  const { request, loading, error } = useApiCall()
  const [refresh, setRefresh] = React.useState(false)

  const allBooks = async (token) => {
    const { url, options } = GET_BOOKS(token)

    const data = await request(url, options)

    //Evitando valores nulos
    const books = data.filter((book) => book != null)

    return books
  }

  const addBook = async (token, title, description) => {
    const { url, options } = POST_ADDBOOK(token, title, description)
    console.log(options)
    const books = await request(url, options)
    setRefresh(true)
    return books
  }

  return {
    refresh,
    allBooks,
    addBook,
    loading,
    error,
  }
}
