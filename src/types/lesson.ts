import { LessonStatus } from '../enum/common'
import { IUserTable } from './user'

export interface ILessonTable {
  key: string
  package: { name: string; student: IUserTable }
  start_datetime: Date
  status: LessonStatus
  teacher: IUserTable
}
