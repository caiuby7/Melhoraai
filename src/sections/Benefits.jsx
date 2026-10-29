import { Gauge, Map, ShieldCheck, Smartphone } from 'lucide-react'

const ITEMS = [
  {
    icon: Smartphone,
    title: 'Para o Cidadão',
    text: 'Abertura rápida de chamados via celular, sem burocracia, com acompanhamento de status em tempo real.',
  },
  {
    icon: Map,
    title: 'Para o Gestor Público',
    text: 'Painel administrativo (Cockpit) com mapa de calor das demandas, relatórios georreferenciados e triagem automatizada.',
  },
  {
    icon: Gauge,
    title: 'Para a Operação',
    text: 'Redução drástica de prazos de atendimento, otimização de rotas de equipes e economia de recursos públicos.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparência e Governança',
    text: 'Dados claros para prestação de contas à população e órgãos de controle.',
  },
]

export default function Benefits() {
  return (
    <section id="solucoes" className="section-anchor py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-action">Proposta de valor</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy">Uma plataforma, quatro pilares</h2>
          <p className="mt-3 text-slate-600">
            Do chamado no celular ao cockpit da prefeitura: o ciclo completo da zeladoria municipal.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-float"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-action-soft text-action">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
