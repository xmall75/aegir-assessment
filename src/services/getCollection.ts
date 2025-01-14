import { readCollection } from '@directus/sdk'
import { client } from '../lib/directus'

export const getCollection = async (collectionName: string) => {
  const result = await client.request(readCollection(collectionName))
  return result
}
