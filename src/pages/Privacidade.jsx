import { Link } from 'react-router-dom'
import { BRAND_NAME, WHATSAPP_DISPLAY, whatsappUrl } from '../config'

export default function Privacidade() {
  return (
    <article className="container-page max-w-3xl py-16">
      <p className="text-sm text-slate-500">
        <Link to="/" className="text-action hover:underline">
          Início
        </Link>{' '}
        / Política de Privacidade
      </p>
      <h1 className="mt-4 text-3xl font-bold text-navy">Política de Privacidade</h1>
      <p className="mt-6 text-slate-600 leading-relaxed">
        O {BRAND_NAME} trata dados pessoais em conformidade com a Lei Geral de Proteção de Dados
        (Lei nº 13.709/2018). Esta página descreve o tratamento realizado neste site institucional.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-navy">Dados coletados</h2>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Nos formulários de demonstração e indicação de prefeitura coletamos nome, cargo, município,
        estado, WhatsApp e e-mail institucional. O envio ocorre via Web3Forms para a equipe comercial.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-navy">Finalidade</h2>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Os dados são usados exclusivamente para retornar o contato, agendar apresentações técnicas
        e registrar indicações de municípios. Não vendemos bases de leads.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-navy">Direitos do titular</h2>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Você pode solicitar acesso, correção ou exclusão dos dados pelo WhatsApp{' '}
        <a className="font-medium text-action hover:underline" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
          {WHATSAPP_DISPLAY}
        </a>
        .
      </p>
    </article>
  )
}
