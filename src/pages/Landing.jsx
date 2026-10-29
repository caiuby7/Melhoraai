import { useState } from 'react'
import IndicateCityForm from '../components/IndicateCityForm'
import LeadForm from '../components/LeadForm'
import Modal from '../components/Modal'
import Benefits from '../sections/Benefits'
import CitizensCta from '../sections/CitizensCta'
import Hero from '../sections/Hero'
import HowItWorks from '../sections/HowItWorks'
import LeadCapture from '../sections/LeadCapture'
import ProductPreview from '../sections/ProductPreview'

export default function Landing() {
  const [leadOpen, setLeadOpen] = useState(false)
  const [indicateOpen, setIndicateOpen] = useState(false)

  return (
    <>
      <Hero onOpenLead={() => setLeadOpen(true)} />
      <Benefits />
      <ProductPreview />
      <HowItWorks />
      <CitizensCta onOpenIndicate={() => setIndicateOpen(true)} />
      <LeadCapture />

      <Modal open={leadOpen} onClose={() => setLeadOpen(false)} title="Agendar demonstração">
        <p className="mb-5 text-sm text-slate-600">
          Preencha os dados abaixo. A equipe MelhoraAi retorna com uma apresentação técnica.
        </p>
        <LeadForm compact />
      </Modal>

      <Modal
        open={indicateOpen}
        onClose={() => setIndicateOpen(false)}
        title="Indique sua prefeitura"
      >
        <p className="mb-5 text-sm text-slate-600">
          Informe o município e o estado. Entraremos em contato com a gestão local.
        </p>
        <IndicateCityForm />
      </Modal>
    </>
  )
}
