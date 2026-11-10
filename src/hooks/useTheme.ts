import { useContext } from 'react'
import { ThemeContext } from './theme-context'

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider } from './ThemeContext'
export type { Theme, ThemeContextType } from './theme-context'
