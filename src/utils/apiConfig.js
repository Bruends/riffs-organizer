/**
 * funções que retornam um objeto de configuração
 * para chamadas de API (fetch)
 */

const BASE_URL = 'http://localhost:3300/booksapi'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

//Rotas de Autenticação
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
  url: BASE_URL + '/user/adduser',
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
