import { IUserTable } from './user'

export interface IRoleTable {
  key: string
  id: string | number
  name: string
  description: string
  users: IUserTable[]
}
