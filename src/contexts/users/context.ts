import { createContext } from 'react'
import { UsersContextType } from './Users'

export const UsersContext = createContext<UsersContextType | undefined>(undefined)
