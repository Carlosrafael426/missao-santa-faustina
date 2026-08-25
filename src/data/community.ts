import type { CommunityGroup } from '../types'
import criancaOrando from '../assets/images/crianca-orando.jpg'
import bazar from '../assets/images/bazar.jpg'
import missas from '../assets/images/missas.jpg'
import tercoCasas from '../assets/images/terco-casas.jpg'
import maosUnidas from '../assets/images/maos-unidas.jpg'

export const communityGroups: CommunityGroup[] = [
  {
    slug: 'catequese',
    name: 'Catequese',
    image: criancaOrando,
    description: 'Formação na fé para crianças e jovens, preparando para os sacramentos.',
  },
  {
    slug: 'bazar',
    name: 'Bazar',
    image: bazar,
    description: 'Feiras beneficentes que sustentam as obras e a missão da comunidade.',
  },
  {
    slug: 'missas',
    name: 'Missas',
    image: missas,
    description: 'Celebrações eucarísticas que reúnem a comunidade em torno do altar.',
  },
  {
    slug: 'terco-nas-casas',
    name: 'Terço nas Casas',
    image: tercoCasas,
    description: 'Encontros de oração do terço levados de casa em casa pelo bairro.',
  },
  {
    slug: 'grupo-de-oracao',
    name: 'Grupo de Oração',
    image: maosUnidas,
    description: 'Comunidade reunida semanalmente para rezar e adorar juntos.',
  },
]
