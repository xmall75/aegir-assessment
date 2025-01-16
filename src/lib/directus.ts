import { authentication, createDirectus, rest } from '@directus/sdk'

export const client = createDirectus(process.env.BASE_URL + '/api')
  .with(authentication('json'))
  .with(rest())
