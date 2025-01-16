import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import DataTable from '../Common/DataTable'
import {
  instrumentColumns,
  lessonColumns,
  packageColumns,
  paymentColumns,
  roleColumns
} from './_columns/columns'
import {
  instrumentQuery,
  lessonQuery,
  packageQuery,
  paymentQuery,
  roleStudentQuery,
  roleTeacherQuery
} from './_queries/queries'
import { useEffect, useState } from 'react'
import { loginDirectus } from '../../services/loginDirectus'

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
    children: (
      <DataTable
        category="collection"
        categoryLabel="payments"
        tableColumns={paymentColumns}
        query={paymentQuery}
        scroll={{ x: 'max-content' }}
      />
    )
  },
  {
    key: '5',
    label: 'Students',
    children: (
      <DataTable
        category="roles"
        tableColumns={roleColumns}
        query={roleStudentQuery}
        scroll={{ x: 'max-content' }}
      />
    )
  },
  {
    key: '6',
    label: 'Teachers',
    children: (
      <DataTable
        category="roles"
        tableColumns={roleColumns}
        query={roleTeacherQuery}
        scroll={{ x: 'max-content' }}
      />
    )
  }
]

const HeroMain = () => {
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const login = async () => {
      const login = await loginDirectus()
      setLoading(false)

      if (!login) {
        setIsLoggedIn(false)
      } else {
        setIsLoggedIn(true)
      }
    }

    login()
  }, [])

  return (
    <div className="w-[95%] lg:w-[80%] xl:w-[75%] mx-auto">
      {loading ? (
        'Please wait ...'
      ) : isLoggedIn ? (
        <Tabs defaultActiveKey="1" items={TabItems} />
      ) : (
        'You are not allowed to see the data'
      )}
    </div>
  )
}

export default HeroMain
