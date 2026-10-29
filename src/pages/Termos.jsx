import { Link } from 'react-router-dom'
import { BRAND_NAME } from '../config'

export default function Termos() {
  return (
    <article className="container-page max-w-3xl py-16">
      <p className="text-sm text-slate-500">
        <Link to="/" className="text-action hover:underline">
          Início
        </Link>{' '}
        / Termos de Uso
      </p>
      <h1 className="mt-4 text-3xl font-bold text-navy">Termos de Uso</h1>
      <p className="mt-6 text-slate-600 leading-relaxed">
        O {BRAND_NAME} é uma plataforma de gestão de demandas urbanas, transparência e zeladoria
        municipal. O uso do site institucional, dos formulários de contato e do ambiente de
        demonstração implica a aceitação destes termos.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-navy">Uso permitido</h2>
      <p className="mt-3 text-slate-600 leading-relaxed">
        O conteúdo desta página destina-se a apresentar a solução a gestores públicos, vereadores,
        assessores e cidadãos. A demonstração é ilustrativa e pode utilizar dados fictícios.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-navy">Contas e acesso administrativo</h2>
      <p className="mt-3 text-slate-600 leading-relaxed">
        O acesso ao painel de municípios parceiros é pessoal e intransferível. Cabe ao usuário
        manter a confidencialidade das credenciais e comunicar qualquer uso indevido.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-navy">Limitação</h2>
      <p className="mt-3 text-slate-600 leading-relaxed">
        As informações desta landing não constituem proposta comercial vinculante. Condições de
        contratação, níveis de serviço e identidade visual white-label são definidos em contrato
        específico com o ente público.
      </p>
    </article>
  )
}
