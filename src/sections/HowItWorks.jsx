import { Bell, MapPinned, Smartphone } from 'lucide-react'

const STEPS = [
  {
    icon: Smartphone,
    title: 'Apontamento',
    text: 'O cidadão registra a ocorrência em poucos segundos no aplicativo.',
  },
  {
    icon: MapPinned,
    title: 'Processamento',
    text: 'O sistema georreferencia, categoriza e direciona a demanda para a secretaria responsável.',
  },
  {
    icon: Bell,
    title: 'Resolução e retorno',
    text: 'A prefeitura executa o serviço e o cidadão recebe a notificação da conclusão.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-anchor py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-action">Como funciona</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy">Três passos simples</h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-float"
            >
              <span className="absolute right-5 top-5 text-4xl font-bold text-slate-100">{index + 1}</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
