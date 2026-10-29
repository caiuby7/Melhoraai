# MelhoraAi — Landing institucional

Site oficial de marketing da plataforma MelhoraAi, publicado em [melhoraai.com.br](https://melhoraai.com.br).

O **produto** (feed de demandas, login municipal, dashboard) permanece em `fiscalizaai-frontend/` e sobe em outra origem (hoje `localhost:5173` / Amplify). Esta pasta é só a landing.

## Como rodar

```bash
cd melhorai-landing
npm install
npm run dev
```

Abre em `http://localhost:5174`.

## Variáveis de ambiente

Copie `.env.example` para `.env`:

| Variável | Padrão | Uso |
| --- | --- | --- |
| `VITE_DEMO_URL` | `https://demo.melhoraai.com.br` | URL da prefeitura demo (enviada por e-mail após o pedido de acesso) |
| `VITE_APP_URL` | `http://localhost:5173` | **Entrar** e Acesso Administrativo → `{APP}/login-prefeitura` |
| `VITE_WEB3FORMS_ACCESS_KEY` | chave Web3Forms | Cópia do lead por e-mail |
| `VITE_HABLLA_WEBHOOK_URL` | vazio | Webhook do Studio Hablla (`https://webhook.hablla.com/v1/...`) |
| `VITE_VIDEO_URL` | `/videos/comercial-prefeitos.mp4` | Comercial no hero (MP4 local, YouTube ou Vimeo) |
| `VITE_WHATSAPP_NUMBER` | `5541988005336` | Botão flutuante, footer e CTA “Falar no WhatsApp” |

O arquivo do comercial fica em `public/videos/comercial-prefeitos.mp4` (~63 MB).

## Hablla CRM

Os formulários enviam JSON para o webhook do [Hablla](https://hablla.com/). Sem `VITE_HABLLA_WEBHOOK_URL`, só o e-mail (Web3Forms) dispara.

No [Studio](https://studio.hablla.com/), crie um fluxo: gatilho **Webhook** → **Pessoas > Criar** (status `lead`). Mapeie `name`, `email`, `phone`, `cargo`, `municipio`, `uf`, `origem`. Cole a URL em `.env` e reinicie o `npm run dev`.

## Build

```bash
npm run build
npm run preview
```
