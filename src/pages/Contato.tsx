import { type FormEvent, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { Button } from '../components/ui/Button'
import { siteInfo } from '../data/site'

export function Contato() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        kicker="Estamos aqui para te acolher"
        title="Fale Conosco"
        description="Envie sua mensagem, pedido de oração ou dúvida. Responderemos com carinho."
      />

      <section id="pedido-de-oracao" className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-semibold tracking-wide text-navy-700 uppercase dark:text-cream-100/70">
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-500 dark:border-white/15 dark:bg-navy-900 dark:text-cream-50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold tracking-wide text-navy-700 uppercase dark:text-cream-100/70">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-500 dark:border-white/15 dark:bg-navy-900 dark:text-cream-50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-semibold tracking-wide text-navy-700 uppercase dark:text-cream-100/70">
              Mensagem ou pedido de oração
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none focus:border-gold-500 dark:border-white/15 dark:bg-navy-900 dark:text-cream-50"
            />
          </div>
          <Button type="submit" className="self-start">
            Enviar mensagem
          </Button>
          {sent && (
            <p className="text-sm font-medium text-crimson-600 dark:text-gold-400">
              Obrigado! Recebemos sua mensagem e em breve entraremos em contato.
            </p>
          )}
        </form>

        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600 dark:text-gold-400" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-navy-900 dark:text-cream-50">{siteInfo.neighborhood}</p>
              <p className="text-sm text-navy-600 dark:text-cream-100/70">{siteInfo.city}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-600 dark:text-gold-400" aria-hidden="true" />
            <a href={`tel:${siteInfo.phone}`} className="text-sm text-navy-600 hover:text-gold-600 dark:text-cream-100/70 dark:hover:text-gold-400">
              {siteInfo.phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-600 dark:text-gold-400" aria-hidden="true" />
            <a href={`mailto:${siteInfo.email}`} className="text-sm text-navy-600 hover:text-gold-600 dark:text-cream-100/70 dark:hover:text-gold-400">
              {siteInfo.email}
            </a>
          </div>
          <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-navy-200 bg-cream-100 text-sm text-navy-400 dark:border-white/15 dark:bg-navy-900 dark:text-cream-100/40">
            Mapa em breve
          </div>
        </div>
      </section>
    </>
  )
}
