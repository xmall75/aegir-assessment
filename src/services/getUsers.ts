import { readUsers } from '@directus/sdk'
import { client } from '../lib/directus'
import { IDirectusQuery } from '../types/directus-query'

export const getUsers = async (query?: IDirectusQuery) => {
  const result = await client.request(readUsers(query))
  return result
}
