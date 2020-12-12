import axios from 'axios'

const { FORTY_TWO_ENDPOINT, FORTY_TWO_UID, FORTY_TWO_SECRET } = process.env

export default function fortyTwo(req, _res, next) {
  req.fortyTwo = {
    getUser,
  }
  next()
}

async function getToken() {
  const { data } = await axios.post(`${FORTY_TWO_ENDPOINT}/oauth/token`, {
    grant_type: 'client_credentials',
    client_id: FORTY_TWO_UID,
    client_secret: FORTY_TWO_SECRET,
  })
  return data
}

async function getUser(login) {
  const { access_token } = await getToken()
  const { data } = await axios.get(`${FORTY_TWO_ENDPOINT}/v2/users/${login}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
  return data
}
