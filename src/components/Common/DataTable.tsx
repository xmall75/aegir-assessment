import { Table, TableProps } from 'antd'
import { useEffect, useState } from 'react'
import { getRoles } from '../../services/getRoles'
import { getItems } from '../../services/getItems'
import { IDirectusQuery } from '../../types/directus-query'

interface DataTableProps<T> {
  category: string
  categoryLabel: string
  tableColumns: TableProps<T>['columns']
  query?: IDirectusQuery
}

const DataTable = <T extends object>(props: DataTableProps<T> & Omit<TableProps<T>, 'columns'>) => {
  const [data, setData] = useState<T[] | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result =
          props.category === 'collection'
            ? await getItems(props.categoryLabel, props.query)
            : await getRoles(props.query)

        setData(result as T[])
      } catch (error) {
        throw new Error(error as string)
      }
    }

    fetchData()
  }, [props.category, props.categoryLabel, props.query])

  return <Table columns={props.tableColumns} dataSource={data} {...props} />
}

export default DataTable
