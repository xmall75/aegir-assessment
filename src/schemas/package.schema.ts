export interface PackageSchema {
  id: number
  status: string
  user_created: string
  date_created: Date
  user_updated: string | null
  date_updated: Date | null
  name: string
  start_datetime: Date
  end_datetime: Date
  student: string
  duration: number
  remarks: string | null
  instrument: number
  lessons_quota: number
  lessons: number[]
  payments: number[]
}
