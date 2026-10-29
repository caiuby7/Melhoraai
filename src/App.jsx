import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import DemoAccessModal from './components/DemoAccessModal'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import { DemoAccessProvider } from './contexts/DemoAccessContext'
import Landing from './pages/Landing'
import Privacidade from './pages/Privacidade'
import Termos from './pages/Termos'

function HashScroll() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash?.replace(/^#/, '')
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <DemoAccessProvider>
        <a href="#conteudo-principal" className="skip-link">
          Ir para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo-principal">
          <HashScroll />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/privacidade" element={<Privacidade />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <DemoAccessModal />
      </DemoAccessProvider>
    </BrowserRouter>
  )
}
