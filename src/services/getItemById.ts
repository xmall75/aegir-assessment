import { readItem } from '@directus/sdk'
import { client } from '../lib/directus'
import { IDirectusQuery } from '../types/directus-query'

export const getItemById = async (
  collectionName: string,
  itemId: string | number,
  query?: IDirectusQuery
) => {
  const result = await client.request(readItem(collectionName, itemId, query))
  return result
}
