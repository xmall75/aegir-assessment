import { ReactNode, useEffect, useState } from 'react'
import { RolesContext } from './context'
import { IRoleTable } from '../../types/role'
import { getRoles } from '../../services/getRoles'
import { roleStudentTeacherQuery } from '../../queries/queries'

export interface RolesContextType {
  rolesData: IRoleTable[] | undefined
  isLoading: boolean
  error: Error | null
}

export const RolesProvider = ({ children }: { children: ReactNode }) => {
  const [rolesData, setRolesData] = useState<IRoleTable[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const result = await getRoles(roleStudentTeacherQuery)

        setRolesData(result as IRoleTable[])
        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch users'))
      }
    }

    fetchData()
  }, [])

  return (
    <RolesContext.Provider value={{ rolesData, isLoading, error }}>
      {children}
    </RolesContext.Provider>
  )
}
