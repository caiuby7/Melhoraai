import { useState } from 'react'
import { UFS } from '../data/ufs'
import { submitLandingLead } from '../lib/hablla'
import Button from './Button'

const INITIAL = {
  municipio: '',
  uf: '',
  contato: '',
  botcheck: '',
}

export default function IndicateCityForm({ onSuccess }) {
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
      'Indicação de prefeitura pelo cidadão — MelhoraAi',
      `Município / UF: ${form.municipio} / ${form.uf}`,
      `Contato: ${form.contato}`,
    ].join('\n')

    const looksLikeEmail = form.contato.includes('@')
    const name = `Cidadão de ${form.municipio}/${form.uf}`
    const email = looksLikeEmail ? form.contato : 'noreply@melhoraai.com.br'
    const phone = looksLikeEmail ? '' : form.contato

    try {
      await submitLandingLead({
        web3Fields: {
          subject: 'Indicação de prefeitura — MelhoraAi',
          from_name: `Cidadão de ${form.municipio}`,
          name,
          email,
          municipio: form.municipio,
          uf: form.uf,
          contato: form.contato,
          message: composed,
          botcheck: form.botcheck,
        },
        habllaPayload: {
          origem: 'landing-indicacao',
          name,
          email,
          phone,
          municipio: form.municipio,
          uf: form.uf,
          contato: form.contato,
        },
      })
      setStatus('ok')
      setMessage('Obrigado! Vamos considerar sua cidade na fila de apresentação.')
      setForm(INITIAL)
      onSuccess?.()
    } catch (error) {
      setStatus('err')
      setMessage(error.message || 'Não foi possível enviar. Tente novamente.')
    }
  }

  const field = 'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-navy placeholder:text-slate-400 transition focus:border-action focus:ring-2 focus:ring-action/20'

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5 text-sm font-medium text-slate-700">
        Município
        <input className={field} name="municipio" value={form.municipio} onChange={onChange} required />
      </label>
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
        Seu WhatsApp ou e-mail
        <input
          className={field}
          name="contato"
          value={form.contato}
          onChange={onChange}
          placeholder="Para retornarmos o contato"
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
        {status === 'sending' ? 'Enviando...' : 'Indicar prefeitura'}
      </Button>
      {message && (
        <p className={`text-sm ${status === 'ok' ? 'text-action' : 'text-red-600'}`} role="status">
          {message}
        </p>
      )}
    </form>
  )
}
