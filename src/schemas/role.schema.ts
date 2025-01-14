export interface RoleSchema {
  id: string
  name: string
  icon: string
  description: string
  parent: string | null
  children: string[]
  policies: string[]
  users: string[]
}
