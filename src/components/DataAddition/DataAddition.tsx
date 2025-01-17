import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { RolesProvider } from '../../contexts/roles/Roles'
import UsersForm from './_forms/UsersForm'

const TabItems: TabsProps['items'] = [
  {
    key: '1',
    label: 'Users',
    children: (
      <RolesProvider>
        <UsersForm />
      </RolesProvider>
    )
  }
  // {
  //   key: '2',
  //   label: 'Lessons',
  //   children: (

  //   )
  // }
]

const DataAddition = () => {
  return (
    <div className="my-5 lg:my-10 w-[95%] lg:w-[80%] xl:w-[75%] mx-auto">
      <h2>Data Manipulation</h2>
      <Tabs defaultActiveKey="1" items={TabItems} />
    </div>
  )
}

export default DataAddition
