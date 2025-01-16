import { IPackageTable } from './package'

export interface IPaymentTable {
  key: string
  id: string | number
  currency: string
  rate: number
  payment_date: string
  package: IPackageTable
}
