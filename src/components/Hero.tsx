import { useState, useEffect } from 'react'

const CODE_STRING = `const dev = {
  name: "Elias",
  focus: "Web and Mobile Apps",
  stack: ["React", "React Native", "Node.js", "TypeScript", "JavaScript"],
}`

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < CODE_STRING.length) {
        setDisplayed(CODE_STRING.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, 22)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-x-clip border-b border-border px-8 pt-24 pb-16 max-sm:px-5 max-sm:pt-20 max-sm:pb-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[600px] max-w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_center_top,rgba(79,142,247,0.08)_0%,transparent_70%)]"
      />
      <div className="relative z-10 w-full max-w-[640px] text-center">
        <h1 className="mb-2 text-[clamp(48px,8vw,80px)] leading-none font-semibold tracking-[-0.03em] text-primary">
          Elias
        </h1>
        <p className="mb-3 text-lg font-light text-secondary">
          Senior Software Developer
        </p>

        <div
          className="mb-8 overflow-hidden rounded-lg border border-border bg-surface text-left"
          aria-label="Code snippet introducing the developer"
        >
          <div className="flex items-center gap-1.5 border-b border-border bg-elevated px-3.5 py-2.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: '#FF5F57' }}
            />
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: '#FFBD2E' }}
            />
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: '#28C840' }}
            />
            <span className="ml-1.5 font-mono text-[11px] text-tertiary">
              profile.js
            </span>
          </div>
          <pre className="min-h-[140px] overflow-x-auto px-6 py-5 font-mono text-[13px] leading-[1.8] whitespace-pre text-accent max-sm:p-4 max-sm:text-[11px]">
            <code>
              {displayed}
              <span
                className={
                  done
                    ? 'hidden'
                    : 'inline-block animate-blink font-light text-accent'
                }
              >
                |
              </span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
