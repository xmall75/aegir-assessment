import { readCollection } from '@directus/sdk'
import { client } from '../lib/directus'

export const useGetCollection = async (collectionName: string) => {
  const result = await client.request(readCollection(collectionName))
  return result
}
