import { Play } from 'lucide-react'
import Button from '../components/Button'
import VideoPlayer from '../components/VideoPlayer'
import { useDemoAccess } from '../contexts/DemoAccessContext'

export default function Hero({ onOpenLead }) {
  const { openDemoAccess } = useDemoAccess()
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-action/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            SaaS GovTech para municípios
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
            Transforme a gestão urbana da sua cidade com inteligência e transparência.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            A plataforma SaaS que conecta cidadãos e prefeituras em tempo real. Resolva problemas
            de iluminação, pavimentação e zeladoria com mapas de calor e tomada de decisão
            baseada em dados.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button type="button" size="lg" onClick={onOpenLead}>
              Agendar Demonstração
            </Button>
            <Button type="button" variant="ghost" size="lg" onClick={openDemoAccess}>
              <Play className="h-4 w-4 fill-current" />
              Ver Prefeitura Demo
            </Button>
          </div>
        </div>

        <VideoPlayer />
      </div>
    </section>
  )
}
