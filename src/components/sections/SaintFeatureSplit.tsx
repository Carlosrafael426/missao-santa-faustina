import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import santaFaustina from '../../assets/images/santa-faustina.jpg'
import rosario from '../../assets/images/rosario.jpg'

export function SaintFeatureSplit() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden bg-navy-950">
        <img
          src={santaFaustina}
          alt="Santa Faustina Kowalska"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
        <div className="relative flex flex-col items-start gap-3 p-8 sm:p-10">
          <span className="h-px w-10 bg-gold-400" aria-hidden="true" />
          <h3 className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">Santa Faustina</h3>
          <p className="max-w-sm text-sm text-cream-100/80 sm:text-base">
            Apóstola da Divina Misericórdia, escolhida por Cristo para recordar ao mundo a mensagem de Sua
            misericórdia.
          </p>
          <Button as={Link} to="/santa-faustina" withArrow>
            Conheça sua história
          </Button>
        </div>
      </div>

      <div className="relative flex min-h-[420px] flex-col justify-end overflow-hidden bg-navy-900">
        <img src={rosario} alt="Terço do Rosário" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent" />
        <div className="relative flex flex-col items-start gap-3 p-8 sm:p-10">
          <span className="h-px w-10 bg-gold-400" aria-hidden="true" />
          <h3 className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">Divina Misericórdia</h3>
          <p className="font-display text-lg text-gold-400 italic">Jesus, eu confio em Vós.</p>
          <p className="max-w-sm text-sm text-cream-100/80 sm:text-base">
            Uma devoção que nos convida a confiar na infinita misericórdia de Deus.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as={Link} to="/divina-misericordia" variant="outlineInverse">
              Terço da Misericórdia
            </Button>
            <Button as={Link} to="/divina-misericordia" variant="outlineInverse">
              Hora da Misericórdia
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
