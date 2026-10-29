import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import { useDemoAccess } from '../contexts/DemoAccessContext'
import CitizenAppMockup from '../mockups/CitizenAppMockup'
import DashboardMockup from '../mockups/DashboardMockup'

const TABS = [
  { id: 'cidadao', label: 'Visão do Cidadão' },
  { id: 'gestor', label: 'Visão do Prefeito' },
]

export default function ProductPreview() {
  const [tab, setTab] = useState('cidadao')
  const { openDemoAccess } = useDemoAccess()

  return (
    <section id="gestores" className="section-anchor bg-white py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-action">Preview do sistema</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy">Duas visões, um mesmo fluxo</h2>
          <p className="mt-3 text-slate-600">
            O cidadão registra o problema no celular. O gestor vê o mapa, os indicadores e a fila
            de atendimento no painel web.
          </p>
        </div>

        <div className="mt-8 flex justify-center" role="tablist" aria-label="Visões do sistema">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              onClick={() => setTab(item.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === item.id
                  ? 'bg-navy text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-10" role="tabpanel">
          {tab === 'cidadao' ? (
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <CitizenAppMockup />
              <div>
                <h3 className="text-2xl font-bold text-navy">App mobile do cidadão</h3>
                <p className="mt-3 text-slate-600">
                  Envio do problema com foto e localização automática. Sem protocolo em papel,
                  sem fila no balcão: o chamado já nasce georreferenciado.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <DashboardMockup />
              <div>
                <h3 className="text-2xl font-bold text-navy">Dashboard web do gestor</h3>
                <p className="mt-3 text-slate-600">
                  Cockpit com gráficos, indicadores e mapa de calor. Priorize regiões críticas
                  e direcione secretarias com evidência, não com achismo.
                </p>
              </div>
            </div>
          )}
        </div>

        <p className="mt-10 text-center text-sm text-slate-600">
          Quer navegar no painel completo?{' '}
          <Button type="button" variant="outline" size="sm" className="ml-2" onClick={openDemoAccess}>
            Acessar Prefeitura Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </p>
      </div>
    </section>
  )
}
