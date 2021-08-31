import React from 'react'
import useApiCall from './useApiCall'
import {
  GET_CONFIG,
  ADD_CONFIG,
  UPDATE_CONFIG,
  DELETE_CONFIG,
} from '../utils/apiConfig'
import useLocalStorage from './useLocalStorage'

export const useMusicAPI = () => {
  const { request, loading, error } = useApiCall()
  const [refresh, setRefresh] = React.useState(false)
  const [token] = useLocalStorage('token', '')

  const allMusics = async () => {
    if (token) {
      const { url, options } = GET_CONFIG(token)
      const musics = await request(url, options)
      return musics
    }
  }

  const addMusic = async (music) => {
    const { url, options } = ADD_CONFIG(token, music)
    await request(url, options)
    setRefresh(!refresh)
  }

  const updateMusic = async (music) => {
    const { url, options } = UPDATE_CONFIG(token, music)
    await request(url, options)
    setRefresh(!refresh)
  }

  const deleteMusic = async (_id) => {
    const { url, options } = DELETE_CONFIG(token, _id)
    await request(url, options)
    setRefresh(!refresh)
  }

  return {
    allMusics,
    addMusic,
    deleteMusic,
    updateMusic,
    refresh,
    loading,
    error,
  }
}
