import { readItem } from '@directus/sdk'
import { client } from '../lib/directus'

export const getItemById = async (collectionName: string, itemId: string | number) => {
  const result = await client.request(readItem(collectionName, itemId))
  return result
}
