import { Link } from 'react-router-dom'
import { HandHeart, Mail, MessageCircle, Phone } from 'lucide-react'
import { Button } from '../ui/Button'
import { siteInfo } from '../../data/site'
import igrejaInterior from '../../assets/images/igreja-interior.jpg'

export function ContactCtaStrip() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col items-start gap-4 bg-crimson-700 p-8 text-cream-50">
        <HandHeart className="h-8 w-8 text-gold-300" aria-hidden="true" />
        <h3 className="font-display text-lg font-semibold">Pedido de Oração</h3>
        <p className="text-sm text-cream-100/85">
          Nossa comunidade estará unida em oração pela sua intenção.
        </p>
        <Button as={Link} to="/contato#pedido-de-oracao">
          Fazer Pedido
        </Button>
      </div>

      <div className="flex flex-col items-start justify-center gap-3 bg-navy-900 p-8 text-cream-50">
        <span className="font-display text-3xl text-gold-400">&ldquo;</span>
        <p className="font-display text-lg leading-snug italic">
          A misericórdia é a maior propriedade de Deus.
        </p>
        <span className="h-px w-8 bg-gold-400" aria-hidden="true" />
        <p className="text-xs tracking-wide text-cream-100/60 uppercase">(Diário, 300)</p>
      </div>

      <div className="flex flex-col items-start gap-3 bg-crimson-800 p-8 text-cream-50">
        <h3 className="font-display text-lg font-semibold">Fale Conosco</h3>
        <p className="text-sm text-cream-100/85">Estamos aqui para te acolher.</p>
        <a href={`tel:${siteInfo.phone}`} className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-gold-300" aria-hidden="true" />
          {siteInfo.phone}
        </a>
        <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-2 text-sm">
          <Mail className="h-4 w-4 text-gold-300" aria-hidden="true" />
          {siteInfo.email}
        </a>
        <Link to="/contato" className="flex items-center gap-2 text-sm text-gold-300 hover:text-gold-200">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Enviar mensagem
        </Link>
      </div>

      <div className="min-h-[220px] overflow-hidden">
        <img src={igrejaInterior} alt="Interior da capela" className="h-full w-full object-cover" />
      </div>
    </section>
  )
}
