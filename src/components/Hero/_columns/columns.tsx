import type { TableProps } from 'antd'
import { IInstrumentTable } from '../../../types/instrument'
import { LessonStatus, PackageStatus, PackageType } from '../../../enum/common'
import { ILessonTable } from '../../../types/lesson'
import { IPackageTable } from '../../../types/package'

// Instruments Columns
export const instrumentColumns: TableProps<IInstrumentTable>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span className="font-bold">{text}</span>
  },
  {
    title: 'Students',
    dataIndex: 'students',
    key: 'students',
    sorter: (a, b) => a.students.length - b.students.length,
    render: (_, { students }) => <span>{students.length}</span>
  },
  {
    title: 'Teachers',
    dataIndex: 'teachers',
    key: 'teachers',
    sorter: (a, b) => a.teachers.length - b.teachers.length,
    render: (_, { teachers }) => <span>{teachers.length}</span>
  }
]

// Lessons Columns
export const lessonColumns: TableProps<ILessonTable>['columns'] = [
  {
    title: 'Package',
    dataIndex: 'package',
    key: 'package',
    // convert enum to be array
    filters: Object.values(PackageType).map((type) => ({
      text: type,
      value: type
    })),
    onFilter: (value, record) => record.package.name.startsWith(value as string),
    render: (_, { package: pack }) => <span className="font-bold">{pack.name}</span>
  },
  {
    title: 'Start Date Time',
    dataIndex: 'start_datetime',
    key: 'start_datetime',
    width: '100',
    render: (_, { start_datetime }) => {
      const date = new Date(start_datetime)
      return <span>{date.toString()}</span>
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    // convert enum to be array
    filters: Object.values(LessonStatus).map((type) => ({
      text: type,
      value: type
    })),
    onFilter: (value, record) => record.status.startsWith(value as string),
    render: (_, { status }) => (
      <span
        className={`${status === LessonStatus.Attended ? 'bg-blue-500 text-white' : 'bg-yellow-200'} px-2 py-1 rounded-md`}
      >
        {status.toUpperCase()}
      </span>
    )
  },
  {
    title: 'Teacher',
    dataIndex: 'teacher',
    key: 'teacher',
    render: (_, { teacher }) => (
      <span>
        {teacher.first_name} {teacher.last_name}
      </span>
    )
  },
  {
    title: 'Student',
    dataIndex: 'student',
    key: 'student',
    render: (_, { package: pack }) => (
      <span>
        {pack.student.first_name} {pack.student.last_name}
      </span>
    )
  }
]

// Packages Columns
export const packageColumns: TableProps<IPackageTable>['columns'] = [
  {
    title: 'Instrument',
    dataIndex: 'instrument',
    key: 'instrument',
    render: (_, { instrument }) => <span className="font-bold">{instrument.name}</span>
  },
  {
    title: 'Package',
    dataIndex: 'package',
    key: 'package',
    // convert enum to be array
    filters: Object.values(PackageType).map((type) => ({
      text: type,
      value: type
    })),
    onFilter: (value, record) => record.name.startsWith(value as string),
    render: (_, { name }) => <span className="font-bold">{name}</span>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    // convert enum to be array
    filters: Object.values(PackageStatus).map((type) => ({
      text: type,
      value: type
    })),
    onFilter: (value, record) => record.status.startsWith(value as string),
    render: (_, { status }) => (
      <span
        className={`${status === PackageStatus.Draft ? 'bg-gray-600 text-white' : status === PackageStatus.Archived ? 'bg-yellow-200' : 'bg-blue-500 text-center'} px-2 py-1 rounded-md`}
      >
        {status.toUpperCase()}
      </span>
    )
  },
  {
    title: 'Student',
    dataIndex: 'student',
    key: 'student',
    render: (_, { student }) => (
      <span>
        {student.first_name} {student.last_name}
      </span>
    )
  },
  {
    title: 'Payment Date',
    dataIndex: 'payment',
    key: 'payment',
    width: '100',
    render: (_, { payments }) => {
      const date = new Date(payments[0].payment_date)
      return <span>{date.toString()}</span>
    }
  }
]
