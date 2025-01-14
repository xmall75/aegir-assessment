export interface LessonSchema {
  id: number
  sort: string[] | null
  user_created: string
  date_created: Date
  user_updated: string | null
  date_updated: Date | null
  package: number
  teacher: string
  start_datetime: Date
  remarks: string | null
  status: string
}
