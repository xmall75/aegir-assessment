import { readItems } from '@directus/sdk'
import { client } from '../lib/directus'
import { IDirectusQuery } from '../types/directus-query'

export const getItems = async (collectionName: string, query?: IDirectusQuery) => {
  const result = await client.request(readItems(collectionName, query))
  return result
}
