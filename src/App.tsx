import { useEffect } from 'react'
import { BrowserRouter, useLocation, useRoutes } from 'react-router-dom'
import { routes } from './app/routes'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppRoutes() {
  return useRoutes(routes)
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
