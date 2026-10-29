const CELLS = [
  0.15, 0.3, 0.55, 0.8, 0.4, 0.2, 0.1,
  0.25, 0.7, 0.95, 0.6, 0.35, 0.2, 0.15,
  0.2, 0.45, 0.85, 0.9, 0.5, 0.25, 0.2,
  0.1, 0.3, 0.55, 0.4, 0.25, 0.15, 0.08,
  0.08, 0.18, 0.3, 0.22, 0.12, 0.08, 0.05,
]

function heatColor(value) {
  if (value > 0.8) return 'bg-red-400'
  if (value > 0.55) return 'bg-amber-400'
  if (value > 0.3) return 'bg-emerald-400'
  return 'bg-emerald-200'
}

const KPIS = [
  { label: 'Abertas', value: '128', tone: 'text-amber-600' },
  { label: 'Em andamento', value: '64', tone: 'text-sky-600' },
  { label: 'Resolvidas', value: '891', tone: 'text-action' },
]

export default function DashboardMockup({ compact = false }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card ${compact ? 'h-full' : ''}`}>
      <div className="flex min-h-[320px]">
        <aside className="hidden w-16 flex-col gap-3 bg-navy p-3 sm:flex">
          <span className="h-8 w-8 rounded-lg bg-action/80" />
          <span className="h-8 w-8 rounded-lg bg-white/10" />
          <span className="h-8 w-8 rounded-lg bg-white/10" />
          <span className="h-8 w-8 rounded-lg bg-white/10" />
        </aside>
        <div className="flex-1 bg-canvas p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Cockpit municipal</p>
              <p className="text-sm font-semibold text-navy">Painel do prefeito</p>
            </div>
            <span className="rounded-full bg-action-soft px-2.5 py-1 text-[11px] font-semibold text-action">Ao vivo</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {KPIS.map((kpi) => (
              <div key={kpi.label} className="rounded-xl bg-white p-3 shadow-sm">
                <p className={`text-lg font-bold ${kpi.tone}`}>{kpi.value}</p>
                <p className="text-[10px] text-slate-500">{kpi.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-white p-3 shadow-sm">
            <p className="mb-2 text-[11px] font-semibold text-navy">Mapa de calor das demandas</p>
            <div className="grid grid-cols-7 gap-1">
              {CELLS.map((value, index) => (
                <span
                  key={index}
                  className={`h-6 rounded-sm sm:h-7 ${heatColor(value)}`}
                  style={{ opacity: 0.45 + value * 0.55 }}
                />
              ))}
            </div>
          </div>
          {!compact && (
            <div className="mt-3 space-y-2">
              {[
                ['Iluminação — Centro', 'Triagem automática'],
                ['Pavimentação — Norte', 'Secretaria de Obras'],
              ].map(([title, meta]) => (
                <div key={title} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs shadow-sm">
                  <span className="font-medium text-navy">{title}</span>
                  <span className="text-slate-500">{meta}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
