import { DirectusUser, createUser as createUserDirectus } from '@directus/sdk'
import { client } from '../lib/directus'

export const createUser = async (userObject: Partial<DirectusUser>) => {
  const result = await client.request(createUserDirectus(userObject))
  return result
}
