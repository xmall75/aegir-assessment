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
