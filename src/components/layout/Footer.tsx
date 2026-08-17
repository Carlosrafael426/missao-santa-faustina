import { Link } from 'react-router-dom'
import { Cross } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { navLinks } from '../../data/navigation'
import { siteInfo } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-100 bg-cream-50 dark:border-white/10 dark:bg-navy-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-400 dark:bg-white/10">
            <Cross className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold tracking-wide text-navy-900 dark:text-cream-50">
              MISSÃO SANTA FAUSTINA
            </span>
            <span className="text-[10px] font-medium tracking-widest text-gold-600 uppercase dark:text-gold-400">
              Jesus, eu confio em Vós
            </span>
          </span>
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold tracking-wide text-navy-700 uppercase dark:text-cream-100/80">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="transition-colors hover:text-gold-600 dark:hover:text-gold-400">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center gap-3">
          <a
            href={siteInfo.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-600 dark:border-white/15 dark:text-cream-100 dark:hover:text-gold-400"
          >
            <FaInstagram className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={siteInfo.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-600 dark:border-white/15 dark:text-cream-100 dark:hover:text-gold-400"
          >
            <FaFacebookF className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={siteInfo.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-600 dark:border-white/15 dark:text-cream-100 dark:hover:text-gold-400"
          >
            <FaYoutube className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-navy-100 px-4 py-4 text-center text-[11px] text-navy-500 sm:px-6 lg:px-8 dark:border-white/10 dark:text-cream-100/50">
        <p>© {year} Missão Santa Faustina. Todos os direitos reservados. Desenvolvido com ♥ para a glória de Deus.</p>
        <p className="mt-1">
          Imagem "Jezu, ufam Tobie" (1934), Eugeniusz Kazimirowski — Wikimedia Commons, domínio público.
        </p>
      </div>
    </footer>
  )
}
