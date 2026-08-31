import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface PhotoCarouselProps {
  photos: string[]
  alt: string
}

export function PhotoCarousel({ photos, alt }: PhotoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-carousel-card]')
    const step = (card?.offsetWidth ?? 280) + 16
    track.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
  }, [photos.length])
  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length))
  }, [photos.length])

  // Lock page scroll and wire up keyboard navigation only while the lightbox is open.
  useEffect(() => {
    if (lightboxIndex === null) return

    document.body.style.overflow = 'hidden'
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxIndex, closeLightbox, showPrev, showNext])

  if (photos.length === 0) return null

  return (
    <>
      <div className="relative">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-6 lg:px-8"
        >
          {photos.map((photo, i) => (
            <button
              key={i}
              type="button"
              data-carousel-card
              onClick={() => setLightboxIndex(i)}
              aria-label={`Ampliar foto ${i + 1} de ${photos.length}`}
              className="shrink-0 snap-start overflow-hidden rounded-2xl"
            >
              <img
                src={photo}
                alt={`${alt} — foto ${i + 1}`}
                loading="lazy"
                className="h-48 w-60 object-cover transition-transform hover:scale-105 sm:h-56 sm:w-72 lg:h-64 lg:w-80"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Fotos anteriores"
          onClick={() => scrollByCard(-1)}
          className="absolute top-1/2 left-1 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-navy-900 shadow-md hover:bg-white sm:flex dark:bg-navy-900/90 dark:text-cream-50 dark:hover:bg-navy-900"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Próximas fotos"
          onClick={() => scrollByCard(1)}
          className="absolute top-1/2 right-1 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 text-navy-900 shadow-md hover:bg-white sm:flex dark:bg-navy-900/90 dark:text-cream-50 dark:hover:bg-navy-900"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {lightboxIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/95 p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} — visualização de fotos`}
          >
          <button
            type="button"
            aria-label="Fechar"
            onClick={closeLightbox}
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-cream-50 hover:bg-white/10"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Foto anterior"
            onClick={(event) => {
              event.stopPropagation()
              showPrev()
            }}
            className="absolute left-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-cream-50 hover:bg-white/10 sm:left-4"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <img
            src={photos[lightboxIndex]}
            alt={`${alt} — foto ${lightboxIndex + 1} de ${photos.length}`}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain sm:max-w-[85vw]"
          />

          <button
            type="button"
            aria-label="Próxima foto"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            className="absolute right-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-cream-50 hover:bg-white/10 sm:right-4"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-cream-100/70">
            {lightboxIndex + 1} / {photos.length}
          </p>
        </div>,
        document.body,
      )}
    </>
  )
}
