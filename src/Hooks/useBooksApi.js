import useApiCall from './useApiCall'
import { GET_BOOKS } from '../utils/apiConfig'

export const useBooksApi = () => {
  const { request, loading, error } = useApiCall()

  const allBooks = async (token) => {
    const { url, options } = GET_BOOKS(token)

    const books = await request(url, options)
    return books
  }

  return {
    allBooks,
  }
}
