import { createSchemaFieldRule } from 'antd-zod'
import { z } from 'zod'

export const UserValidationSchema = z.object({
  first_name: z.string({ required_error: 'First name is required' }),
  last_name: z.string().optional(),
  email: z.string({ required_error: 'Email is required' }).email({
    message: 'Invalid email address'
  }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' }),
  role: z.string({ required_error: 'Please choose a role' })
})

export const UserValidationRule = createSchemaFieldRule(UserValidationSchema)
