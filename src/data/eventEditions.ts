import { Soup } from 'lucide-react'
import type { EventEdition, EventSeries } from '../types'

const DATE_FORMATTER = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })

// Files are named "foto(1).jpeg", "foto(2).jpeg", etc. — sort numerically by that
// number instead of alphabetically, since string order would put "foto(10)" before "foto(2)".
const noiteDaSopa3Photos = Object.entries(
  import.meta.glob('/src/assets/images/3-noite-da-sopa/*.jpeg', { eager: true, import: 'default' }),
)
  .sort(([pathA], [pathB]) => {
    const numberOf = (path: string) => Number(path.match(/\((\d+)\)/)?.[1] ?? 0)
    return numberOf(pathA) - numberOf(pathB)
  })
  .map(([, url]) => url as string)

/** Formats an edition's ISO date (YYYY-MM-DD) as a full Portuguese date, e.g. "29 de agosto de 2026". */
export function formatEditionDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  return DATE_FORMATTER.format(new Date(year, month - 1, day))
}

export const eventSeries: EventSeries[] = [
  {
    slug: 'noite-da-sopa',
    title: 'Noite da Sopa',
    summary: 'Uma tradição da Missão Santa Faustina: noites de sopa, fé e fraternidade em prol da nossa capela.',
    icon: Soup,
  },
]

// NOTA: as descrições da 1ª e 2ª edição abaixo são um rascunho escrito no mesmo espírito
// da 3ª (fornecida pela comunidade), já que não temos o texto original dessas edições.
// Revisar e ajustar antes de considerar definitivo.
export const eventEditions: EventEdition[] = [
  {
    seriesSlug: 'noite-da-sopa',
    slug: '1-noite-da-sopa',
    title: '1ª Noite da Sopa',
    summary: 'O primeiro encontro que deu início à tradição da Noite da Sopa na nossa comunidade.',
    description: [
      'A 1ª Noite da Sopa marcou o início de uma linda tradição na Missão Santa Faustina: reunir a comunidade em torno de uma mesa simples, mas cheia de significado. Foi um dos primeiros grandes encontros da nossa missão, pensado para aproximar as famílias do bairro Eucaliptos e mostrar que a fé se vive também na partilha e na convivência.',
      'Na ocasião, servimos sopas variadas preparadas com carinho pelos próprios membros da comunidade, além de bebidas quentes para aquecer a noite. Também houve momentos de oração, música e muita conversa entre os que compareceram, fortalecendo os primeiros laços da nossa família de fé.',
      'Acreditamos que é nos pequenos gestos — como oferecer um prato de sopa a quem chega — que a misericórdia de Deus se torna mais visível entre nós. Essa primeira noite plantou a semente de tudo que viria depois.',
      'Toda a arrecadação da 1ª Noite da Sopa foi destinada ao início do sonho de termos uma capela própria no bairro, um espaço onde a Missão Santa Faustina pudesse crescer e acolher ainda mais pessoas.',
    ],
  },
  {
    seriesSlug: 'noite-da-sopa',
    slug: '2-noite-da-sopa',
    title: '2ª Noite da Sopa',
    summary: 'Uma noite de sopas, bingo e confraternização que reforçou os laços da nossa missão.',
    description: [
      'A 2ª Noite da Sopa chegou consolidando o que a primeira edição havia começado: um encontro já esperado por muitos na comunidade, reunindo famílias antigas e novos rostos em torno da mesma mesa e do mesmo propósito.',
      'Com um cardápio ainda mais variado de sopas e bebidas quentes, a noite contou também com brincadeiras e um momento de bingo, trazendo alegria para adultos e crianças. A confraternização se estendeu pela noite, reforçando os laços de amizade dentro da missão.',
      'Cada edição da Noite da Sopa nos lembra que caminhar em comunidade exige constância: não basta um único encontro, é preciso continuar se reunindo, orando e servindo uns aos outros, dia após dia.',
      'Assim como na primeira, o valor arrecadado na 2ª Noite da Sopa foi somado à grande campanha para a construção da nossa capela — mais um passo concreto rumo a esse sonho que pertence a toda a comunidade.',
    ],
  },
  {
    seriesSlug: 'noite-da-sopa',
    slug: '3-noite-da-sopa',
    title: '3ª Noite da Sopa',
    summary: 'Uma noite de sopas, bingo e fraternidade para arrecadar fundos para a construção da nossa capela.',
    date: '2026-08-29',
    coverImage: noiteDaSopa3Photos[0],
    gallery: noiteDaSopa3Photos,
    description: [
      'A 3ª Noite da Sopa é um momento especial de fé, união e fraternidade promovido pelos integrantes da Missão Santa Faustina. Mais do que um evento, é uma oportunidade de reunir nossa comunidade em torno daquilo que nos une: a fé em Deus, o amor ao próximo e o desejo de construir juntos uma comunidade cada vez mais forte.',
      'Em uma noite preparada com muito carinho, teremos deliciosas sopas, além de bebidas como chá de amendoim, quentão, refrigerantes e água. Também teremos bingo e momentos de confraternização, proporcionando uma noite de alegria para toda a família.',
      'Nossa fé nos ensina que, quando caminhamos juntos, somos capazes de transformar sonhos em realidade. Cada encontro, cada oração, cada contribuição e cada gesto de solidariedade fazem parte da nossa caminhada como comunidade.',
      'A 3ª Noite da Sopa também tem um propósito muito especial: arrecadar recursos para a construção da nossa capela, um sonho que representa não apenas um espaço físico, mas um lugar onde nossa comunidade poderá se reunir para rezar, celebrar a fé, fortalecer a esperança e viver ainda mais intensamente a presença de Deus.',
    ],
  },
]
