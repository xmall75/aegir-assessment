import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import DataTable from '../Common/DataTable'
import { instrumentColumns, lessonColumns, packageColumns } from './_columns/columns'
import { instrumentQuery, lessonQuery, packageQuery } from './_queries/queries'

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
