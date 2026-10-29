import { WEB3FORMS_ACCESS_KEY } from '../config'

export async function submitWeb3Form(fields) {
  const formData = new FormData()
  formData.append('access_key', WEB3FORMS_ACCESS_KEY)

  Object.entries(fields).forEach(([key, value]) => {
    if (value == null || value === '') return
    formData.append(key, String(value))
  })

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  })

  const data = await response.json()
  if (!data.success) {
    throw new Error(data.message || 'Não foi possível enviar o formulário.')
  }
  return data
}
