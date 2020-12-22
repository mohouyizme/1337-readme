import axios from 'axios'
import { NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'

const { FORTY_TWO_ENDPOINT, FORTY_TWO_UID, FORTY_TWO_SECRET } = process.env

export default function fortyTwo(
  req: NextApiCustomRequest,
  _res: NextApiResponse,
  next: NextHandler
) {
  req.fortyTwo = { getUser }
  next()
}

async function getToken() {
  const response = await axios.post(`${FORTY_TWO_ENDPOINT}/oauth/token`, {
    grant_type: 'client_credentials',
    client_id: FORTY_TWO_UID,
    client_secret: FORTY_TWO_SECRET,
  })
  return response.data
}

async function getUser(login: string): Promise<FortyTwoUser> {
  const { access_token } = await getToken()
  const response = await axios.get(`${FORTY_TWO_ENDPOINT}/v2/users/${login}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
  return response.data
}
