import { useDemoAccess } from '../contexts/DemoAccessContext'
import DemoAccessForm from './DemoAccessForm'
import Modal from './Modal'

export default function DemoAccessModal() {
  const { open, closeDemoAccess } = useDemoAccess()

  return (
    <Modal open={open} onClose={closeDemoAccess} title="Acesso à Prefeitura Demo">
      <p className="mb-5 text-sm text-slate-600">
        Informe seus dados para solicitar o ambiente de demonstração. Enviaremos o link e o
        acesso para o e-mail institucional informado.
      </p>
      <DemoAccessForm compact />
    </Modal>
  )
}
