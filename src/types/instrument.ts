import { IUserTable } from './user'

export interface IJunctionInstrumentUser {
  [key: string]: IUserTable
}

export interface IInstrumentTable {
  key: string
  id: string | number
  name: string
  students: IJunctionInstrumentUser[]
  teachers: IJunctionInstrumentUser[]
}
