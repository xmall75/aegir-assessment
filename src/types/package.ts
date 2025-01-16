import { PackageStatus } from '../enum/common'
import { IInstrumentTable } from './instrument'
import { IUserTable } from './user'

export interface IPackageTable {
  key: string
  name: string
  status: PackageStatus
  instrument: IInstrumentTable
  student: IUserTable
  payments: {
    payment_date: Date
    [key: string]: unknown
  }[]
}
