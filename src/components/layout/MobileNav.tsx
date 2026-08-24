import { NavLink as RouterNavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { Button } from '../ui/Button'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity 2xl:hidden ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-navy-950/60" onClick={onClose} />
      <div
        className={`absolute inset-y-0 right-0 flex w-full max-w-xs flex-col gap-8 bg-cream-50 px-6 py-6 shadow-xl transition-transform dark:bg-navy-900 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-700 hover:bg-navy-100 dark:text-cream-100 dark:hover:bg-white/10"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-navy-900 text-gold-400 dark:bg-white/10'
                    : 'text-navy-800 hover:bg-navy-50 dark:text-cream-100 dark:hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <Button as={RouterNavLink} to="/contato" onClick={onClose} className="justify-center">
          Fale Conosco
        </Button>
      </div>
    </div>
  )
}
