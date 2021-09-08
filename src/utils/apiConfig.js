/**
 * funções que retornam um objeto de configuração
 * para chamadas de API (fetch)
 */

const BASE_URL = 'http://localhost:3300/musics'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

// === Configuração Rotas de Autenticação ===
export const POST_LOGIN = (email, password) => ({
  url: BASE_URL + '/user/login',
  options: {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      password,
    }),
  },
})

export const POST_REGISTER = (username, email, password) => ({
  url: BASE_URL + '/user/register',
  options: {
    method: 'POST',
    headers,
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  },
})

// === Configuração rotas (CRUD)
export const GET_CONFIG = (token) => ({
  url: BASE_URL + '/all',
  options: {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  },
})

export const ADD_CONFIG = (token, music) => ({
  url: BASE_URL + '/add',
  options: {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      ...headers,
    },
    body: JSON.stringify({
      music,
    }),
  },
})

export const UPDATE_CONFIG = (token, music) => ({
  url: BASE_URL + '/update',
  options: {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${token}`,
      ...headers,
    },
    body: JSON.stringify({
      music,
    }),
  },
})

export const DELETE_CONFIG = (token, _id) => ({
  url: BASE_URL + '/delete',
  options: {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
      ...headers,
    },
    body: JSON.stringify({
      _id,
    }),
  },
})

export const UPDATE_LOOPS = (token, _id, loops) => ({
  url: BASE_URL + '/loops',
  options: {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${token}`,
      ...headers,
    },
    body: JSON.stringify({
      _id,
      loops,
    }),
  },
})
