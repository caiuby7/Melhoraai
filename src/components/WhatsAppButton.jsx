import { WHATSAPP_DISPLAY, WHATSAPP_DEMO_TEXT, whatsappUrl } from '../config'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(WHATSAPP_DEMO_TEXT)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp ${WHATSAPP_DISPLAY}`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-float transition duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
