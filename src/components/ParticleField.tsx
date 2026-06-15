import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'

// Reference width the per-layer counts below are tuned for. The actual field
// width tracks the viewport, and counts scale by (fieldWidth / DENSITY_WIDTH)
// so the areal density of dust stays constant across screen sizes.
const DENSITY_WIDTH = 2560
// Clamp the field width so tiny screens still get a usable spread and ultrawide
// displays don't blow up the GPU texture / dot count unbounded.
const FIELD_MIN = 360
const FIELD_MAX = 3840
// Only regenerate on resize once the width shifts by more than this, to avoid
// constant re-randomizing while dragging a window edge.
const RESIZE_THRESHOLD = 250
// Vertical span the dust scrolls through before the ::after clone loops it.
const TRAVEL = 2000

function getFieldWidth(): number {
  if (typeof window === 'undefined') return DENSITY_WIDTH
  return Math.min(FIELD_MAX, Math.max(FIELD_MIN, window.innerWidth))
}

// Tracks the viewport-derived field width, updating only on meaningful resizes.
function useFieldWidth(): number {
  const [fieldWidth, setFieldWidth] = useState(getFieldWidth)
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const onResize = () => {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        const next = getFieldWidth()
        setFieldWidth((prev) =>
          Math.abs(next - prev) > RESIZE_THRESHOLD ? next : prev,
        )
      }, 200)
    }
    window.addEventListener('resize', onResize)
    return () => {
      clearTimeout(timeout.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return fieldWidth
}

// Drift speed range (seconds for a full loop). Each layer picks a random
// duration in this range, so different bands of dust move at different speeds.
const SPEED_MIN = 120
const SPEED_MAX = 480

// Dust colors: accent blue and white. Each dot randomly picks one (weighted
// per layer via accentRatio) for a bluish, theme-tinted haze.
const ACCENT_RGB = '79, 142, 247'
const WHITE_RGB = '255, 255, 255'

// Base element size (px). Per-dot size is grown from this via the box-shadow
// spread radius, so each dot can be a random diameter within [minSize, maxSize].
const BASE_SIZE = 1

type LayerConfig = {
  count: number
  minSize: number
  maxSize: number
  minOpacity: number
  maxOpacity: number
  accentRatio: number
}

const LAYERS: LayerConfig[] = [
  // prettier-ignore
  { count: 450, minSize: 1, maxSize: 2, minOpacity: 0.15, maxOpacity: 0.5, accentRatio: 0.6 },
  // prettier-ignore
  { count: 320, minSize: 1, maxSize: 2.5, minOpacity: 0.12, maxOpacity: 0.45, accentRatio: 0.7 },
  // prettier-ignore
  { count: 200, minSize: 1.5, maxSize: 3, minOpacity: 0.12, maxOpacity: 0.4, accentRatio: 0.65 },
  // prettier-ignore
  { count: 130, minSize: 2, maxSize: 3.5, minOpacity: 0.1, maxOpacity: 0.35, accentRatio: 0.7 },
  // prettier-ignore
  { count: 90, minSize: 2, maxSize: 4, minOpacity: 0.1, maxOpacity: 0.3, accentRatio: 0.55 },
]

function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

function makeShadow(
  count: number,
  width: number,
  height: number,
  minSize: number,
  maxSize: number,
  minOpacity: number,
  maxOpacity: number,
  accentRatio: number,
): string {
  const shadows: string[] = []
  for (let i = 0; i < count; i++) {
    const x = Math.round(Math.random() * width)
    const y = Math.round(Math.random() * height)
    const opacity = randomInRange(minOpacity, maxOpacity).toFixed(2)
    const rgb = Math.random() < accentRatio ? ACCENT_RGB : WHITE_RGB
    // Spread grows the BASE_SIZE dot to a random diameter (spread adds to both
    // sides, hence /2). blur is 0 to keep the dust crisp.
    const spread = ((randomInRange(minSize, maxSize) - BASE_SIZE) / 2).toFixed(
      2,
    )
    shadows.push(`${x}px ${y}px 0px ${spread}px rgba(${rgb}, ${opacity})`)
  }
  return shadows.join(', ')
}

export default function ParticleField() {
  const fieldWidth = useFieldWidth()

  const layers = useMemo(
    () =>
      LAYERS.map((layer) => {
        const duration = Math.round(randomInRange(SPEED_MIN, SPEED_MAX))
        const twinkleDuration = randomInRange(4, 9)
        // Scale the dot count to the field width to hold density constant.
        const count = Math.round((layer.count * fieldWidth) / DENSITY_WIDTH)
        return {
          duration,
          driftDelay: -randomInRange(0, duration),
          twinkleDuration,
          twinkleDelay: -randomInRange(0, twinkleDuration),
          shadow: makeShadow(
            count,
            fieldWidth,
            TRAVEL,
            layer.minSize,
            layer.maxSize,
            layer.minOpacity,
            layer.maxOpacity,
            layer.accentRatio,
          ),
        }
      }),
    [fieldWidth],
  )

  return (
    <div className="particles" aria-hidden="true">
      {layers.map((layer, i) => (
        <div
          key={i}
          className="particle-layer"
          style={
            {
              '--star-shadow': layer.shadow,
              '--star-size': `${BASE_SIZE}px`,
              '--star-travel': `${TRAVEL}px`,
              '--star-duration': `${layer.duration}s`,
              '--drift-delay': `${layer.driftDelay.toFixed(2)}s`,
              '--twinkle-duration': `${layer.twinkleDuration.toFixed(2)}s`,
              '--twinkle-delay': `${layer.twinkleDelay.toFixed(2)}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
