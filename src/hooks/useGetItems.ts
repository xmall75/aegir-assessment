import { readItems } from '@directus/sdk'
import { client } from '../lib/directus'

export const useGetItems = async (collectionName: string) => {
  const result = await client.request(readItems(collectionName))
  return result
}
