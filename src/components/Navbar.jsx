import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LOGIN_URL } from '../config'
import { useDemoAccess } from '../contexts/DemoAccessContext'
import Button from './Button'
import Logo from './Logo'

const LINKS = [
  { href: '/#solucoes', label: 'Soluções' },
  { href: '/#como-funciona', label: 'Como Funciona' },
  { href: '/#gestores', label: 'Para Gestores' },
  { href: '/#cidadaos', label: 'Para Cidadãos' },
  { href: '/#video', label: 'Vídeo' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { openDemoAccess } = useDemoAccess()

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a href="/" className="shrink-0 py-2" aria-label="MelhoraAi — início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={LOGIN_URL} variant="outline" size="sm">
            Entrar
          </Button>
          <Button type="button" size="sm" onClick={openDemoAccess}>
            Testar Demo
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3" aria-label="Mobile">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-3 pb-3">
              <Button href={LOGIN_URL} variant="outline">
                Entrar
              </Button>
              <Button type="button" onClick={() => { setOpen(false); openDemoAccess() }}>
                Testar Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
