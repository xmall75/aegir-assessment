/* eslint-disable no-console */
import { client } from '../lib/directus'

export const loginDirectus = async (email?: string, password?: string) => {
  try {
    const userEmail = email ?? process.env.DIRECTUS_EMAIL
    const userPassword = password ?? process.env.DIRECTUS_PASSWORD

    const response = await client.login(userEmail as string, userPassword as string)
    return response
  } catch (error) {
    console.error('Login error:', error)
    throw error
  }
}
