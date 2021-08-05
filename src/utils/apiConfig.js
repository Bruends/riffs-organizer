const BASE_URL = 'http://localhost:3300/booksapi'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const POST_LOGIN = (username, email, password) => ({
  url: BASE_URL + '/user/login',
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
