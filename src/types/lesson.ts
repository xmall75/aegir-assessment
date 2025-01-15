import { LessonStatus } from '../enum/common'

export interface ILessonTable {
  key: string
  package: number
  start_datetime: Date
  status: LessonStatus
}
