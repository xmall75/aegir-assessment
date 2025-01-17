import { createSchemaFieldRule } from 'antd-zod'
import { z } from 'zod'

export interface UserSchema {
  id: string
  first_name: string
  last_name: string
  email: string
  password: string
  location: string | null
  title: string | null
  description: string | null
  tags: string | null
  avatar: string | null
  language: string | null
  tfa_secret: string | null
  status: string
  role: string
  token: string | null
  last_access: string | null
  last_page: string | null
  provider: string
  external_identifier: string | null
  auth_data: string | null
  email_notifications: boolean
  appearance: string | null
  theme_dark: string | null
  theme_light: string | null
  theme_light_overrides: string | null
  theme_dark_overrides: string | null
  username: string | null
  student_instruments: number[]
  teacher_instruments: number[]
  policies: string[]
}

export const UserValidationSchema = z.object({
  first_name: z.string({ required_error: 'First name is required' }),
  last_name: z.string().optional(),
  email: z.string({ required_error: 'Email is required' }).email({
    message: 'Invalid email address'
  }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' })
})

export const UserValidationRule = createSchemaFieldRule(UserValidationSchema)
