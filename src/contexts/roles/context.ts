import { createContext } from 'react'
import { RolesContextType } from './Roles'

export const RolesContext = createContext<RolesContextType | undefined>(undefined)
