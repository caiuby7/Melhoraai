import { Link } from 'react-router-dom'
import { BRAND_NAME, LOGIN_URL, WHATSAPP_DISPLAY, whatsappUrl } from '../config'
import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-navy text-slate-300">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <span className="inline-flex rounded-xl bg-white px-3 py-2">
            <Logo />
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Soluções tecnológicas para gestão pública. Transparência, zeladoria e decisão
            baseada em dados para municípios brasileiros.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:text-white" href="/#solucoes">Soluções</a></li>
            <li><a className="hover:text-white" href="/#como-funciona">Como funciona</a></li>
            <li><a className="hover:text-white" href="/#contato">Agendar demonstração</a></li>
            <li>
              <a className="hover:text-white" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Institucional</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/termos">Termos de Uso</Link></li>
            <li><Link className="hover:text-white" to="/privacidade">Política de Privacidade</Link></li>
            <li><a className="hover:text-white" href={LOGIN_URL}>Acesso Administrativo</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        Copyright © {year} {BRAND_NAME} — Soluções Tecnológicas para Gestão Pública.
      </div>
    </footer>
  )
}
