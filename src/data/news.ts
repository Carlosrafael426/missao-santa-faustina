import type { NewsItem } from '../types'
import adoracao from '../assets/images/adoracao.jpg'
import procissao from '../assets/images/procissao.jpg'
import voluntarios from '../assets/images/voluntarios.jpg'
import jovens from '../assets/images/jovens.jpg'

export const newsItems: NewsItem[] = [
  {
    slug: 'retiro-de-homens',
    title: 'Retiro de Homens',
    excerpt: 'Um fim de semana de oração, fraternidade e transformação.',
    date: '08 de Maio de 2024',
    image: adoracao,
  },
  {
    slug: 'festa-da-divina-misericordia-2024',
    title: 'Festa da Divina Misericórdia 2024',
    excerpt: 'Confira como foi nossa celebração cheia de graça e bênçãos.',
    date: '05 de Maio de 2024',
    image: procissao,
  },
  {
    slug: 'acao-social',
    title: 'Ação Social',
    excerpt: 'Levando amor e esperança para quem mais precisa.',
    date: '02 de Maio de 2024',
    image: voluntarios,
  },
  {
    slug: 'encontro-de-jovens',
    title: 'Encontro de Jovens',
    excerpt: 'Foi uma noite incrível na presença de Deus!',
    date: '30 de Abril de 2024',
    image: jovens,
  },
]
