import { readRoles } from '@directus/sdk'
import { client } from '../lib/directus'
import { IDirectusQuery } from '../types/directus-query'

export const getRoles = async (query?: IDirectusQuery) => {
  const result = await client.request(readRoles(query))
  return result
}
