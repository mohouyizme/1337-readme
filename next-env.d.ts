/// <reference types="next" />
/// <reference types="next/types/global" />

interface FortyTwoCursusData {
  id: number
  name: string
  slug: string
}
interface FortyTwoCursus {
  cursus_id: number
  grade: string | null
  level: number
  cursus: FortyTwoCursusData
}
interface FortyTwoUser {
  email: string
  first_name: string
  last_name: string
  image_url: string
  'staff?': boolean
  cursus_users: FortyTwoCursus[]
}
interface FortyTwo {
  getUser(login: string): Promise<FortyTwoUser>
}
interface NextApiCustomRequest extends NextApiRequest {
  fortyTwo: FortyTwo
}

interface FortyTwoCursusData {
  id: number
  name: string
  slug: string
}
interface FortyTwoCursus {
  cursus_id: number
  grade: string | null
  level: number
  cursus: FortyTwoCursusData
}
interface FortyTwoUser {
  email: string
  first_name: string
  last_name: string
  image_url: string
  'staff?': boolean
  cursus_users: FortyTwoCursus[]
}
interface QueryData {
  login: string
  cursus: string
  email: string
  leet_logo: string
  forty_two_network_logo: string
  dark: string
}
interface CustomRequest extends IncomingMessage {
  fortyTwo: FortyTwo
  query: QueryData
}

interface UserProfileCursus {
  grade: string | null
  name: string
  level: number
}
interface UserProfile {
  login: string
  fullName: string
  email: string | boolean
  image: string
  isPisciner: boolean
  isStaff: boolean
  cursus: UserProfileCursus | boolean
  leetLogo: boolean
  fortyTwoLogo: boolean
  isDark: boolean
}
