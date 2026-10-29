import { Landmark } from 'lucide-react'
import Button from '../components/Button'

export default function CitizensCta({ onOpenIndicate }) {
  return (
    <section id="cidadaos" className="section-anchor pb-8">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-slate-800 p-8 text-white shadow-float sm:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Landmark className="h-6 w-6 text-emerald-300" />
              </span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Quer ver o MelhoraAi funcionando na sua cidade?
              </h2>
              <p className="mt-3 text-slate-300">
                Indique sua prefeitura. Levamos a demonstração até o gabinete e o secretariado.
              </p>
            </div>
            <Button type="button" size="lg" onClick={onOpenIndicate}>
              Indique sua Prefeitura
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
