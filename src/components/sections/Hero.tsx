import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import jesusMisericordioso from '../../assets/images/jesus-misericordioso.jpg'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50 dark:bg-navy-950">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-gold-600 uppercase dark:text-gold-400">
            Bem-vindo à
          </span>
          <h1 className="font-display text-[2.03rem] leading-[1.05] font-bold text-navy-900 sm:text-[2.7rem] lg:text-[3.38rem] dark:text-cream-50">
            Missão
            <br />
            <span className="text-navy-700 dark:text-cream-100">Santa Faustina</span>
          </h1>
          <p className="max-w-md text-[0.9rem] text-navy-600 sm:text-[1.01rem] dark:text-cream-100/80">
            Uma comunidade reunida pela fé, guiada pela misericórdia e centrada em Cristo.
          </p>
          <p className="font-display text-lg text-gold-600 italic sm:text-[1.35rem] dark:text-gold-400">
            Jesus, eu confio em Vós.
          </p>
          <Button as={Link} to="/nossa-missao" withArrow>
            Conheça Nossa Missão
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-crimson-500/20 via-gold-400/10 to-navy-400/20 blur-3xl" />
          <img
            src={jesusMisericordioso}
            alt="Jesus Misericordioso — Jesus, eu confio em Vós"
            className="mx-auto w-full max-w-[220px] rounded-t-full object-cover shadow-xl shadow-navy-900/20 sm:max-w-[260px] lg:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  )
}
