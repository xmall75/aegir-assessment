import { readRoles } from '@directus/sdk'
import { client } from '../lib/directus'

export const getRoles = async () => {
  const result = await client.request(readRoles())
  return result
}
