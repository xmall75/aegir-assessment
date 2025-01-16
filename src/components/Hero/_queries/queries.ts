import { IDirectusQuery } from '../../../types/directus-query'

// Instruments
export const instrumentQuery: IDirectusQuery = {
  fields: [
    'id',
    'name',
    'students',
    'students.students_id.first_name',
    'students.students_id.last_name',
    'teachers',
    'teachers.teachers_id.first_name',
    'teachers.teachers_id.last_name'
  ]
}

// Lessons
export const lessonQuery: IDirectusQuery = {
  limit: -1,
  fields: [
    'id',
    'package.name',
    'start_datetime',
    'status',
    'package.student.first_name',
    'package.student.last_name',
    'teacher.first_name',
    'teacher.last_name'
  ]
}

// Packages
export const packageQuery: IDirectusQuery = {
  limit: -1,
  fields: [
    'id',
    'instrument.name',
    'name',
    'status',
    'student.first_name',
    'student.last_name',
    'payments.payment_date',
    'payments.rate'
  ]
}

// Payments
export const paymentQuery: IDirectusQuery = {
  limit: -1,
  fields: [
    'id',
    'currency',
    'rate',
    'payment_date',
    'package.id',
    'package.student.first_name',
    'package.student.last_name'
  ]
}
