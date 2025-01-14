import { readUser } from '@directus/sdk'
import { client } from '../lib/directus'
import { IDirectusQuery } from '../types/directus-query'

export const getUserById = async (userId: string, query?: IDirectusQuery) => {
  const result = await client.request(readUser(userId, query))
  return result
}
