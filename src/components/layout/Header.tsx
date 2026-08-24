import { useState } from 'react'
import { NavLink as RouterNavLink, Link } from 'react-router-dom'
import { Cross, Heart, Menu } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'
import { MobileNav } from './MobileNav'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-navy-100 bg-cream-50/95 backdrop-blur dark:border-white/10 dark:bg-navy-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-400 dark:bg-white/10">
              <Cross className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-tight whitespace-nowrap">
              <span className="font-display text-sm font-bold tracking-wide text-navy-900 sm:text-base dark:text-cream-50">
                MISSÃO
                <br />
                SANTA FAUSTINA
              </span>
              <span className="mt-1 text-[10px] font-medium tracking-widest text-gold-600 uppercase dark:text-gold-400">
                Jesus, eu confio em Vós
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-4 2xl:flex 2xl:gap-6">
            {navLinks.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `shrink-0 text-xs font-semibold tracking-wide whitespace-nowrap uppercase transition-colors ${
                    isActive
                      ? 'text-gold-600 dark:text-gold-400'
                      : 'text-navy-700 hover:text-gold-600 dark:text-cream-100 dark:hover:text-gold-400'
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              to="/comunidade#pedido-de-oracao"
              aria-label="Pedido de oração"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-100 sm:inline-flex dark:text-cream-100 dark:hover:bg-white/10"
            >
              <Heart className="h-5 w-5" aria-hidden="true" />
            </Link>
            <div className="hidden 2xl:block">
              <Button as={Link} to="/contato">
                Fale Conosco
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-800 hover:bg-navy-100 2xl:hidden dark:text-cream-100 dark:hover:bg-white/10"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
