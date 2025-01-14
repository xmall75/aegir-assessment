import { readUsers } from '@directus/sdk'
import { client } from '../lib/directus'

export const getUsers = async () => {
  const result = await client.request(readUsers())
  return result
}
