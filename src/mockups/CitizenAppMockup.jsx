import { Camera, MapPin } from 'lucide-react'

export default function CitizenAppMockup() {
  return (
    <div className="mx-auto w-[280px] rounded-[2rem] border-[8px] border-navy bg-navy shadow-float">
      <div className="rounded-[1.4rem] bg-white">
        <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[10px] font-medium text-slate-500">
          <span>09:41</span>
          <span className="h-4 w-20 rounded-full bg-navy" />
          <span>5G</span>
        </div>
        <div className="px-4 pb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-action">Nova ocorrência</p>
          <h3 className="mt-1 text-lg font-bold text-navy">Iluminação pública</h3>
          <p className="mt-1 text-xs text-slate-500">Poste apagado na esquina — envie foto e localização.</p>

          <div className="mt-4 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-slate-100 p-3">
            <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-emerald-300 bg-white/70 text-slate-400">
              <Camera className="h-8 w-8" />
            </div>
            <p className="mt-2 text-center text-[11px] text-slate-500">Toque para adicionar foto</p>
          </div>

          <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-50 p-3">
            <MapPin className="mt-0.5 h-4 w-4 text-action" />
            <div>
              <p className="text-xs font-semibold text-navy">Localização automática</p>
              <p className="text-[11px] text-slate-500">Rua das Palmeiras, 120 — Centro</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-action py-2.5 text-center text-sm font-semibold text-white">
            Enviar chamado
          </div>
          <p className="mt-3 text-center text-[10px] text-slate-400">Acompanhe o status em tempo real</p>
        </div>
      </div>
    </div>
  )
}
