import { readRole } from '@directus/sdk'
import { client } from '../lib/directus'
import { IDirectusQuery } from '../types/directus-query'

export const getRoleById = async (roleId: string, query?: IDirectusQuery) => {
  const result = await client.request(readRole(roleId, query))
  return result
}
