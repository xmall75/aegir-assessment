import { createDirectus, rest } from '@directus/sdk'

export const client = createDirectus(process.env.BASE_URL + '/api').with(rest())
