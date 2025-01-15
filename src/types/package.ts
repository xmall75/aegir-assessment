import { PackageStatus } from '../enum/common'
import { IUserTable } from './user'

export interface IPackageTable {
  key: string
  name: string
  status: PackageStatus
  instrument: number
  student: IUserTable
}
