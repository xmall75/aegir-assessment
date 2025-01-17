import { Modal, Tooltip, type TableProps } from 'antd'
import { IInstrumentTable, IJunctionInstrumentUser } from '../../../types/instrument'
import { LessonStatus, PackageStatus, PackageType } from '../../../enum/common'
import { ILessonTable } from '../../../types/lesson'
import { IPackageTable } from '../../../types/package'
import { IPaymentTable } from '../../../types/payment'
import { IUserTable } from '../../../types/user'
import { FaEye } from 'react-icons/fa'

export const handleShowUsersModal = (users: IJunctionInstrumentUser[], title?: string) => {
  Modal.info({
    title: title ?? 'List Users',
    content: (
      <div>
        {users.map((user, index) => {
          const { teachers_id, students_id } = user
          return (
            <p key={index}>
              {teachers_id !== undefined && `${teachers_id.first_name} ${teachers_id.last_name}`}
              {students_id !== undefined && `${students_id.first_name} ${students_id.last_name}`}
            </p>
          )
        })}
      </div>
    ),
    maskClosable: true,
    okText: 'Close'
  })
}

// Instruments Columns
export const instrumentColumns: TableProps<IInstrumentTable>['columns'] = [
  {
    title: 'Instrument ID',
    dataIndex: 'id',
    key: 'id',
    width: '150px'
  },
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
    render: (_, { students }) => (
      <div className="flex gap-2 items-center">
        <span>{students.length}</span>{' '}
        <Tooltip title="View Students">
          <FaEye
            onClick={() => handleShowUsersModal(students, 'List Students')}
            className="w-[30px] hover:text-gray-500 cursor-pointer"
          />
        </Tooltip>
      </div>
    )
  },
  {
    title: 'Teachers',
    dataIndex: 'teachers',
    key: 'teachers',
    sorter: (a, b) => a.teachers.length - b.teachers.length,
    render: (_, { teachers }) => (
      <div className="flex gap-2 items-center">
        <span>{teachers.length}</span>{' '}
        <Tooltip title="View Teachers">
          <FaEye
            onClick={() => handleShowUsersModal(teachers, 'List Teachers')}
            className="w-[30px] hover:text-gray-500 cursor-pointer"
          />
        </Tooltip>
      </div>
    )
  }
]

// Lessons Columns
export const lessonColumns: TableProps<ILessonTable>['columns'] = [
  {
    title: 'Lesson ID',
    dataIndex: 'id',
    key: 'id',
    fixed: 'left'
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
    title: 'Package ID',
    dataIndex: 'id',
    key: 'id',
    fixed: true
  },
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

// Payments Columns
export const paymentColumns: TableProps<IPaymentTable>['columns'] = [
  {
    title: 'Payment ID',
    dataIndex: 'id',
    key: 'id',
    fixed: true
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
    render: (_, { currency }) => <span className="font-bold">{currency.toUpperCase()}</span>
  },
  {
    title: 'Rate',
    dataIndex: 'rate',
    key: 'rate'
  },
  {
    title: 'Payment Date',
    dataIndex: 'payment',
    key: 'payment',
    width: '100',
    render: (_, { payment_date }) => {
      const date = new Date(payment_date)
      return <span>{date.toString()}</span>
    }
  },
  {
    title: 'Package ID',
    dataIndex: 'packageId',
    key: 'packageId',
    render: (_, { package: pkg }) => <span>{pkg.id}</span>
  },
  {
    title: 'Student',
    dataIndex: 'student',
    key: 'student',
    render: (_, { package: pkg }) => (
      <span>
        {pkg.student.first_name} {pkg.student.last_name}
      </span>
    )
  }
]

// Roles Columns - for Students & Teachers
export const roleColumns: TableProps<IUserTable>['columns'] = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '100',
    render: (_, { first_name, last_name }) => {
      return (
        <span className="font-bold">
          {first_name} {last_name}
        </span>
      )
    }
  }
]
