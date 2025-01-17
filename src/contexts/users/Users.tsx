import { ReactNode, useEffect, useState } from 'react'
import { IUserTable } from '../../types/user'
import { UsersContext } from './context'
import { getUsers } from '../../services/getUsers'

export interface UsersContextType {
  studentsData: IUserTable[] | undefined
  teachersData: IUserTable[] | undefined
  isLoading: boolean
  error: Error | null
}

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [studentsData, setStudentsData] = useState<IUserTable[] | undefined>(undefined)
  const [teachersData, setTeachersData] = useState<IUserTable[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const result = await getUsers()

        setStudentsData(result[0].users as IUserTable[])
        setTeachersData(result[1].users as IUserTable[])
        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch users'))
      }
    }

    fetchData()
  }, [])

  return (
    <UsersContext.Provider value={{ studentsData, teachersData, isLoading, error }}>
      {children}
    </UsersContext.Provider>
  )
}
