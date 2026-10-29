import Button from '../components/Button'
import LeadForm from '../components/LeadForm'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { WHATSAPP_DEMO_TEXT, WHATSAPP_DISPLAY, whatsappUrl } from '../config'

export default function LeadCapture() {
  return (
    <section id="contato" className="section-anchor py-20">
      <div className="container-page grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-action">Para gestores públicos</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy">Agende uma apresentação técnica</h2>
          <p className="mt-4 text-slate-600">
            Prefeitos, secretários, vereadores e assessores: mostre o MelhoraAi em operação,
            com o painel, o mapa de calor e o fluxo do cidadão.
          </p>
          <Button
            href={whatsappUrl(WHATSAPP_DEMO_TEXT)}
            variant="whatsapp"
            className="mt-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp {WHATSAPP_DISPLAY}
          </Button>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
