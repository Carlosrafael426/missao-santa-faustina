import type { RouteObject } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Home } from '../pages/Home'
import { NossaMissao } from '../pages/NossaMissao'
import { SantaFaustina } from '../pages/SantaFaustina'
import { DivinaMisericordia } from '../pages/DivinaMisericordia'
import { Comunidade } from '../pages/Comunidade'
import { Calendario } from '../pages/Calendario'
import { Contato } from '../pages/Contato'
import { NotFound } from '../pages/NotFound'

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/nossa-missao', element: <NossaMissao /> },
      { path: '/santa-faustina', element: <SantaFaustina /> },
      { path: '/divina-misericordia', element: <DivinaMisericordia /> },
      { path: '/comunidade', element: <Comunidade /> },
      { path: '/calendario', element: <Calendario /> },
      { path: '/contato', element: <Contato /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
