import nc from 'next-connect'

import fortyTwo from '../../middlewares/42'

const handler = nc()

handler.use(fortyTwo)

export default handler
