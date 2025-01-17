import { useContext } from 'react'
import { RolesContext } from './context'

export const useRoles = () => {
  const context = useContext(RolesContext)
  if (context === undefined) {
    throw new Error('useRoles must be used within a RolesProvider')
  }
  return context
}
