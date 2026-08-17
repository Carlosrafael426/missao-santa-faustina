import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-600 dark:border-cream-100/20 dark:text-cream-100 dark:hover:border-gold-400 dark:hover:text-gold-400"
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  )
}
