import { IUserTable } from './user'

export interface IRoleTable {
  key: string
  name: string
  description: string
  users: IUserTable[]
}
