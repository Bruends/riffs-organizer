import React from 'react'
import useApiCall from './useApiCall'
import { GET_BOOKS, POST_ADDBOOK, PUT_UPDATEBOOK } from '../utils/apiConfig'
import useLocalStorage from './useLocalStorage'

export const useBooksApi = () => {
  const { request, loading, error } = useApiCall()
  const [refresh, setRefresh] = React.useState(false)
  const [token] = useLocalStorage('token', '')

  const allBooks = async () => {
    if (token) {
      const { url, options } = GET_BOOKS(token)

      const data = await request(url, options)

      //Evitando valores nulos
      const books = data.filter((book) => book != null)

      return books
    }
  }

  const findBook = async (id) => {
    if (token) {
      const { url, options } = GET_BOOKS(token)

      const data = await request(url, options)

      //Evitando valores nulos
      const books = data.filter((book) => book != null && book._id === id)

      return books
    }
  }

  const addBook = async ({ title, description }) => {
    console.log('====== add book')
    await request(url, options)
    const { url, options } = POST_ADDBOOK(token, title, description)
    console.log(options)
    setRefresh(!refresh)
  }

  const editBook = async ({ _id, title, description }) => {
    console.log('====== update book')
    const { url, options } = PUT_UPDATEBOOK(token, _id, title, description)
    console.log(options)
    console.log(_id)
    await request(url, options)
    setRefresh(!refresh)
  }

  return {
    allBooks,
    addBook,
    editBook,
    findBook,
    refresh,
    loading,
    error,
  }
}
