import React from 'react'
import { toast } from 'react-toastify'
import useApiCall from './useApiCall'
import {
  GET_CONFIG,
  ADD_CONFIG,
  UPDATE_CONFIG,
  DELETE_CONFIG,
  UPDATE_LOOPS,
} from '../utils/apiConfig'
import useLocalStorage from './useLocalStorage'

export const useMusicAPI = () => {
  const { request, loading, apiErrorMessage } = useApiCall()
  const [refresh, setRefresh] = React.useState(false)
  const [token] = useLocalStorage('token', '')

  const allMusics = async () => {
    if (token) {
      try {
        const { url, options } = GET_CONFIG(token)
        const musics = await request(url, options)

        return musics
      } catch (error) {
        toast.error('Erro ao carregar Músicas')
      }
    }
  }

  const addMusic = async (music) => {
    try {
      const { url, options } = ADD_CONFIG(token, music)
      await request(url, options)

      toast.success('Música Adicionada com Sucesso !')
      setRefresh(!refresh)
    } catch (error) {
      toast.error('Erro ao adicionar Música')
    }
  }

  const updateMusic = async (music) => {
    try {
      const { url, options } = UPDATE_CONFIG(token, music)
      await request(url, options)

      toast.success('Música editada com Sucesso !')
      setRefresh(!refresh)
    } catch (error) {
      toast.error('Erro ao editar')
    }
  }

  const deleteMusic = async (_id) => {
    try {
      const { url, options } = DELETE_CONFIG(token, _id)
      await request(url, options)

      toast.success('Música deletada com Sucesso !')
      setRefresh(!refresh)
    } catch (error) {
      toast.error('Erro ao deletar')
    }
  }

  const updateLoops = async (_id, loops) => {
    try {
      const { url, options } = UPDATE_LOOPS(token, _id, loops)
      await request(url, options)

      toast.success('Loops Atualizados com Sucesso !')
      setRefresh(!refresh)
    } catch (error) {
      toast.error('Erro ao atualizar loops')
    }
  }

  return {
    apiRequest: {
      allMusics,
      addMusic,
      deleteMusic,
      updateMusic,
      updateLoops,
    },
    apiStates: { refresh, loading },
  }
}
