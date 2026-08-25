import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import jesusMisericordioso from '../../assets/images/jesus-misericordioso.jpg'

const HOLD_DURATION = 700
const TRANSFORM_DURATION = 2200
const FADE_DURATION = 400

type IntroPhase = 'idle' | 'playing' | 'done'

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null)
  const [introPhase, setIntroPhase] = useState<IntroPhase>('idle')
  const [contentVisible, setContentVisible] = useState(false)
  const [overlayBoxStyle, setOverlayBoxStyle] = useState<CSSProperties | null>(null)
  const [overlayTransform, setOverlayTransform] = useState('translate(0, 0) scale(1)')
  const [transformTransition, setTransformTransition] = useState('none')
  const [overlayOpacity, setOverlayOpacity] = useState(1)
  const [opacityTransition, setOpacityTransition] = useState('none')

  useLayoutEffect(() => {
    if (!imgRef.current) return
    const img = imgRef.current

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setIntroPhase('done')
      setContentVisible(true)
      return
    }

    document.body.style.overflow = 'hidden'

    function startIntro() {
      if (!img) return
      // FLIP technique: measure where the image will finally rest (First/Last),
      // then render the overlay image already scaled up and shifted so it
      // appears large and centered on screen (Invert). Animating the transform
      // back to identity (Play) makes it shrink into the real image's spot.
      const finalRect = img.getBoundingClientRect()
      const finalCenterX = finalRect.left + finalRect.width / 2
      const finalCenterY = finalRect.top + finalRect.height / 2

      const largeWidth = Math.min(window.innerWidth, window.innerHeight) * 0.66
      const scale = largeWidth / finalRect.width
      const dx = window.innerWidth / 2 - finalCenterX
      const dy = window.innerHeight / 2 - finalCenterY

      setOverlayBoxStyle({
        position: 'fixed',
        top: finalRect.top,
        left: finalRect.left,
        width: finalRect.width,
        height: finalRect.height,
      })
      setTransformTransition('none')
      setOverlayTransform(`translate(${dx}px, ${dy}px) scale(${scale})`)
      setIntroPhase('playing')

      const holdTimer = setTimeout(() => {
        setTransformTransition(`transform ${TRANSFORM_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`)
        setOverlayTransform('translate(0, 0) scale(1)')
        setContentVisible(true)
      }, HOLD_DURATION)

      const fadeTimer = setTimeout(() => {
        setOpacityTransition(`opacity ${FADE_DURATION}ms ease`)
        setOverlayOpacity(0)
      }, HOLD_DURATION + TRANSFORM_DURATION)

      const endTimer = setTimeout(() => {
        document.body.style.overflow = ''
        setIntroPhase('done')
      }, HOLD_DURATION + TRANSFORM_DURATION + FADE_DURATION)

      cleanupTimers.push(holdTimer, fadeTimer, endTimer)
    }

    function skipIntro() {
      document.body.style.overflow = ''
      setIntroPhase('done')
      setContentVisible(true)
    }

    const cleanupTimers: ReturnType<typeof setTimeout>[] = []

    if (img.complete && img.naturalWidth > 0) {
      startIntro()
    } else {
      img.addEventListener('load', startIntro, { once: true })
      img.addEventListener('error', skipIntro, { once: true })
    }

    return () => {
      cleanupTimers.forEach(clearTimeout)
      img.removeEventListener('load', startIntro)
      img.removeEventListener('error', skipIntro)
      document.body.style.overflow = ''
    }
    // Intentionally empty: this must run once on mount only. Adding introPhase
    // (or any state this effect sets) as a dependency would re-run the effect
    // on every setIntroPhase call, cancelling the timers right after they're scheduled.
  }, [])

  return (
    <section className="relative overflow-hidden bg-cream-50 dark:bg-navy-950">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-20">
        <div
          className={`flex flex-col items-center gap-5 text-center transition-all duration-700 ease-out lg:items-start lg:text-left ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-gold-600 uppercase dark:text-gold-400">
            Bem-vindo à
          </span>
          <h1 className="font-display text-[2.03rem] leading-[1.05] font-bold text-navy-900 sm:text-[2.7rem] lg:text-[3.38rem] dark:text-cream-50">
            Missão
            <br />
            <span className="text-navy-700 dark:text-cream-100">Santa Faustina</span>
          </h1>
          <p className="max-w-md text-[0.9rem] text-navy-600 sm:text-[1.01rem] dark:text-cream-100/80">
            Uma comunidade reunida pela fé, guiada pela misericórdia e centrada em Cristo.
          </p>
          <p className="font-display text-lg text-gold-600 italic sm:text-[1.35rem] dark:text-gold-400">
            Jesus, eu confio em Vós.
          </p>
          <Button as={Link} to="/nossa-missao" withArrow>
            Conheça Nossa Missão
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-crimson-500/20 via-gold-400/10 to-navy-400/20 blur-3xl" />
          <img
            ref={imgRef}
            src={jesusMisericordioso}
            alt="Jesus Misericordioso — Jesus, eu confio em Vós"
            className="mx-auto w-full max-w-[242px] rounded-t-full object-cover shadow-xl shadow-navy-900/20 sm:max-w-[286px] lg:max-w-[330px]"
          />
        </div>
      </div>

      {introPhase !== 'done' && (
        <div
          data-intro-overlay="true"
          className="fixed inset-0 z-[60] bg-cream-50 dark:bg-navy-950"
          style={{ opacity: overlayOpacity, transition: opacityTransition }}
          aria-hidden="true"
        >
          {overlayBoxStyle && (
            <img
              src={jesusMisericordioso}
              alt=""
              className="mercy-image-fade rounded-t-full object-cover"
              style={{
                ...overlayBoxStyle,
                transform: overlayTransform,
                transformOrigin: 'center center',
                transition: transformTransition,
              }}
            />
          )}
        </div>
      )}
    </section>
  )
}
