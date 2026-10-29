import { HABLLA_WEBHOOK_URL } from '../config'
import { submitWeb3Form } from './web3forms'

export async function submitHabllaLead(payload) {
  if (!HABLLA_WEBHOOK_URL) return { skipped: true }

  const response = await fetch(HABLLA_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Não foi possível registrar o lead no Hablla.')
  }

  return { skipped: false }
}

export async function submitLandingLead({ web3Fields, habllaPayload }) {
  await Promise.all([
    submitWeb3Form(web3Fields),
    submitHabllaLead(habllaPayload),
  ])
}
