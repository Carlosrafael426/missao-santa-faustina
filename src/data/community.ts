import type { CommunityGroup } from '../types'
import familia from '../assets/images/familia.jpg'
import jovens from '../assets/images/jovens.jpg'
import homemOrando from '../assets/images/homem-orando.jpg'
import mulherOrando from '../assets/images/mulher-orando.jpg'
import criancaOrando from '../assets/images/crianca-orando.jpg'
import maosUnidas from '../assets/images/maos-unidas.jpg'
import maosCoracao from '../assets/images/maos-coracao.jpg'

export const communityGroups: CommunityGroup[] = [
  {
    slug: 'familias',
    name: 'Famílias',
    image: familia,
    description: 'Fortalecendo o lar como a primeira igreja doméstica, unida pela fé.',
  },
  {
    slug: 'jovens',
    name: 'Jovens',
    image: jovens,
    description: 'Encontros, retiros e missão para viver a fé com alegria e ousadia.',
  },
  {
    slug: 'homens',
    name: 'Homens',
    image: homemOrando,
    description: 'Formação e fraternidade para homens que buscam viver a fé com coragem.',
  },
  {
    slug: 'mulheres',
    name: 'Mulheres',
    image: mulherOrando,
    description: 'Espaço de oração, partilha e crescimento espiritual entre mulheres.',
  },
  {
    slug: 'criancas',
    name: 'Crianças',
    image: criancaOrando,
    description: 'Catequese e atividades que semeiam o amor de Deus desde cedo.',
  },
  {
    slug: 'grupos-de-oracao',
    name: 'Grupos de Oração',
    image: maosUnidas,
    description: 'Comunidades reunidas semanalmente para rezar e adorar juntas.',
  },
  {
    slug: 'acao-social',
    name: 'Ação Social',
    image: maosCoracao,
    description: 'Levando a misericórdia de Cristo a quem mais precisa.',
  },
]
