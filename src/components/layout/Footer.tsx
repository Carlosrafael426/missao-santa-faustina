import { Link } from 'react-router-dom'
import { Cross, Mail, MapPin } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { siteInfo } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-100 bg-cream-50 dark:border-white/10 dark:bg-navy-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link to="/" className="flex items-center justify-center gap-3 lg:justify-start">
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

        <div className="flex flex-col items-center gap-2 text-sm text-navy-700 sm:flex-row sm:gap-6 dark:text-cream-100/80">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" aria-hidden="true" />
            {siteInfo.neighborhood}, {siteInfo.city}
          </span>
          <a
            href={`mailto:${siteInfo.email}`}
            className="flex items-center gap-2 transition-colors hover:text-gold-600 dark:hover:text-gold-400"
          >
            <Mail className="h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" aria-hidden="true" />
            {siteInfo.email}
          </a>
        </div>

        <div className="flex justify-center gap-3">
          {siteInfo.whatsappGroup && (
            <a
              href={siteInfo.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              aria-label="Grupo do WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-600 dark:border-white/15 dark:text-cream-100 dark:hover:text-gold-400"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          <a
            href={siteInfo.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-gold-400 hover:text-gold-600 dark:border-white/15 dark:text-cream-100 dark:hover:text-gold-400"
          >
            <FaInstagram className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-navy-100 px-4 py-4 text-center text-[11px] text-navy-500 sm:px-6 lg:px-8 dark:border-white/10 dark:text-cream-100/50">
        <p>© {year} Missão Santa Faustina. Todos os direitos reservados. Desenvolvido com ♥ para a glória de Deus.</p>
      </div>
    </footer>
  )
}
