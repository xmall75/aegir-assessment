import { IUserTable } from './user'

export interface IJunctionInstrumentUser {
  [key: string]: IUserTable
}

export interface IInstrumentTable {
  key: string
  name: string
  students: IJunctionInstrumentUser[]
  teachers: IJunctionInstrumentUser[]
}
