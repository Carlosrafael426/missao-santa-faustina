import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { useSeo } from '../hooks/useSeo'

export function NotFound() {
  const { pathname } = useLocation()

  useSeo({
    title: 'Página não encontrada',
    description: 'A página que você procura não existe ou foi movida.',
    path: pathname,
    noindex: true,
  })

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <span className="font-display text-6xl font-bold text-gold-500">404</span>
      <h1 className="font-display text-2xl font-semibold text-navy-900 dark:text-cream-50">Página não encontrada</h1>
      <p className="max-w-sm text-sm text-navy-600 dark:text-cream-100/70">
        A página que você procura não existe ou foi movida.
      </p>
      <Button as={Link} to="/">
        Voltar ao início
      </Button>
    </section>
  )
}
