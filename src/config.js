const trimSlash = (value) => (value || '').replace(/\/$/, '')

export const BRAND_NAME = 'MelhoraAi'
export const SITE_URL = 'https://melhoraai.com.br'

export const DEMO_URL =
  trimSlash(import.meta.env.VITE_DEMO_URL) || 'https://demo.melhoraai.com.br'

export const APP_URL =
  trimSlash(import.meta.env.VITE_APP_URL) || 'http://localhost:5173'

export const LOGIN_URL = `${APP_URL}/login-prefeitura`

export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '4d8ffb67-b1d1-4164-afc3-765570b80b1b'

export const HABLLA_WEBHOOK_URL = (import.meta.env.VITE_HABLLA_WEBHOOK_URL || '').trim()

export const VIDEO_URL =
  import.meta.env.VITE_VIDEO_URL || '/videos/comercial-prefeitos.mp4'

export const WHATSAPP_NUMBER =
  (import.meta.env.VITE_WHATSAPP_NUMBER || '5541988005336').replace(/\D/g, '')

export const WHATSAPP_DISPLAY = '(41) 98800-5336'

export const WHATSAPP_DEMO_TEXT =
  'Olá, quero agendar uma demonstração do MelhoraAi.'

export function whatsappUrl(text) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  if (!text) return base
  return `${base}?text=${encodeURIComponent(text)}`
}
