import { useState } from 'react'
import { CARGOS, UFS } from '../data/ufs'
import { submitLandingLead } from '../lib/hablla'
import Button from './Button'

const INITIAL = {
  name: '',
  cargo: '',
  municipio: '',
  uf: '',
  whatsapp: '',
  email: '',
  botcheck: '',
}

export default function LeadForm({ compact = false, onSuccess }) {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setMessage('')

    const composed = [
      'Solicitação de apresentação técnica — MelhoraAi',
      `Nome: ${form.name}`,
      `Cargo: ${form.cargo}`,
      `Município / UF: ${form.municipio} / ${form.uf}`,
      `WhatsApp: ${form.whatsapp}`,
      `E-mail: ${form.email}`,
    ].join('\n')

    try {
      await submitLandingLead({
        web3Fields: {
          subject: 'Apresentação MelhoraAi',
          from_name: form.name,
          name: form.name,
          email: form.email,
          cargo: form.cargo,
          municipio: form.municipio,
          uf: form.uf,
          whatsapp: form.whatsapp,
          message: composed,
          botcheck: form.botcheck,
        },
        habllaPayload: {
          origem: 'landing-apresentacao',
          name: form.name,
          email: form.email,
          phone: form.whatsapp,
          cargo: form.cargo,
          municipio: form.municipio,
          uf: form.uf,
        },
      })
      setStatus('ok')
      setMessage('Recebemos seu pedido. Em breve a equipe MelhoraAi entra em contato.')
      setForm(INITIAL)
      onSuccess?.()
    } catch (error) {
      setStatus('err')
      setMessage(error.message || 'Não foi possível enviar. Tente novamente ou fale no WhatsApp.')
    }
  }

  const field = 'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-navy placeholder:text-slate-400 transition focus:border-action focus:ring-2 focus:ring-action/20'

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5 text-sm font-medium text-slate-700">
        Nome completo
        <input
          className={field}
          name="name"
          value={form.name}
          onChange={onChange}
          autoComplete="name"
          required
        />
      </label>

      <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Cargo
          <select className={field} name="cargo" value={form.cargo} onChange={onChange} required>
            <option value="">Selecione</option>
            {CARGOS.map((cargo) => (
              <option key={cargo} value={cargo}>
                {cargo}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Município
          <input
            className={field}
            name="municipio"
            value={form.municipio}
            onChange={onChange}
            required
          />
        </label>
      </div>

      <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          Estado
          <select className={field} name="uf" value={form.uf} onChange={onChange} required>
            <option value="">UF</option>
            {UFS.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-slate-700">
          WhatsApp
          <input
            className={field}
            name="whatsapp"
            value={form.whatsapp}
            onChange={onChange}
            inputMode="tel"
            placeholder="(41) 98800-0000"
            required
          />
        </label>
      </div>

      <label className="grid gap-1.5 text-sm font-medium text-slate-700">
        E-mail institucional
        <input
          className={field}
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          autoComplete="email"
          required
        />
      </label>

      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        onChange={onChange}
      />

      <Button type="submit" className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Solicitar Apresentação Técnica'}
      </Button>

      {message && (
        <p className={`text-sm ${status === 'ok' ? 'text-action' : 'text-red-600'}`} role="status">
          {message}
        </p>
      )}
    </form>
  )
}
