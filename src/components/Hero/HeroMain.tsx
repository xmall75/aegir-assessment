import { Tabs } from 'antd'
import type { TableProps, TabsProps } from 'antd'
import { IInstrumentTable } from '../../types/instrument'
import DataTable from '../Common/DataTable'
import { IDirectusQuery } from '../../types/directus-query'
import { ILessonTable } from '../../types/lesson'
import { LessonStatus, PackageStatus, PackageType } from '../../enum/common'
import { IPackageTable } from '../../types/package'

const instrumentColumns: TableProps<IInstrumentTable>['columns'] = [
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

const instrumentQuery: IDirectusQuery = {
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

const lessonColumns: TableProps<ILessonTable>['columns'] = [
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

const lessonQuery: IDirectusQuery = {
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

const packageColumns: TableProps<IPackageTable>['columns'] = [
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

const packageQuery: IDirectusQuery = {
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

const TabItems: TabsProps['items'] = [
  {
    key: '1',
    label: 'Instruments',
    children: (
      <DataTable
        category="collection"
        categoryLabel="instruments"
        tableColumns={instrumentColumns}
        query={instrumentQuery}
      />
    )
  },
  {
    key: '2',
    label: 'Lessons',
    children: (
      <DataTable
        category="collection"
        categoryLabel="lessons"
        tableColumns={lessonColumns}
        query={lessonQuery}
        scroll={{ x: 'max-content' }}
      />
    )
  },
  {
    key: '3',
    label: 'Packages',
    children: (
      <DataTable
        category="collection"
        categoryLabel="packages"
        tableColumns={packageColumns}
        query={packageQuery}
        scroll={{ x: 'max-content' }}
      />
    )
  },
  {
    key: '4',
    label: 'Payments',
    children: 'Content of Tab Pane 3'
  },
  {
    key: '5',
    label: 'Students',
    children: 'Content of Tab Pane 3'
  },
  {
    key: '6',
    label: 'Teachers',
    children: 'Content of Tab Pane 3'
  }
]

const HeroMain = () => {
  return (
    <div className="w-[95%] lg:w-[80%] xl:w-[75%] mx-auto">
      <Tabs defaultActiveKey="1" items={TabItems} />
    </div>
  )
}

export default HeroMain
