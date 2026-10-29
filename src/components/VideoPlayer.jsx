import { useMemo, useState } from 'react'
import { Play } from 'lucide-react'
import { VIDEO_URL } from '../config'
import { useDemoAccess } from '../contexts/DemoAccessContext'
import DashboardMockup from '../mockups/DashboardMockup'

function toEmbedUrl(url) {
  if (!url) return ''
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed/${parsed.pathname.replace('/', '')}?autoplay=1`
    }
    if (parsed.hostname.includes('youtube.com')) {
      const id = parsed.searchParams.get('v')
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1`
      if (parsed.pathname.startsWith('/embed/')) return url
    }
    if (parsed.hostname.includes('vimeo.com')) {
      const id = parsed.pathname.split('/').filter(Boolean).pop()
      return `https://player.vimeo.com/video/${id}?autoplay=1`
    }
  } catch {
    return ''
  }
  return url
}

function isDirectVideo(url) {
  if (!url) return false
  return (
    url.startsWith('/') ||
    url.startsWith('./') ||
    /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)
  )
}

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const { openDemoAccess } = useDemoAccess()
  const fileUrl = isDirectVideo(VIDEO_URL) ? VIDEO_URL : ''
  const embedUrl = useMemo(() => (fileUrl ? '' : toEmbedUrl(VIDEO_URL)), [fileUrl])
  const hasVideo = Boolean(fileUrl || embedUrl)

  const startPlayback = () => {
    if (hasVideo) setPlaying(true)
    else openDemoAccess()
  }

  return (
    <div
      id="video"
      className="section-anchor overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-float"
    >
      <div className="relative aspect-video bg-slate-900">
        {playing && fileUrl ? (
          <video
            className="h-full w-full object-cover"
            src={fileUrl}
            controls
            autoPlay
            playsInline
            title="Comercial MelhoraAi para prefeitos"
          >
            Seu navegador não reproduz vídeo HTML5.
          </video>
        ) : playing && embedUrl ? (
          <iframe
            title="Vídeo explicativo MelhoraAi"
            src={embedUrl}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {fileUrl ? (
              <video
                className="absolute inset-0 h-full w-full object-cover opacity-70"
                src={fileUrl}
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
            ) : (
              <div className="absolute inset-0 origin-top scale-[0.92] opacity-80">
                <DashboardMockup compact />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-navy/10" />
            <button
              type="button"
              onClick={startPlayback}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white"
              aria-label={hasVideo ? 'Reproduzir vídeo' : 'Abrir prefeitura demo'}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-action shadow-float transition hover:scale-105 hover:bg-action-hover">
                <Play className="ml-1 h-7 w-7 fill-white" />
              </span>
              <span className="text-sm font-medium tracking-wide">
                {hasVideo ? 'Assistir apresentação' : 'Ver Prefeitura Demo'}
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}
