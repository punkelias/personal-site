import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page not found · punkelias.dev'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-border bg-base/85 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-[760px] items-center justify-between px-8 max-sm:px-5">
          <Link to="/" className="font-mono text-sm font-medium text-accent">
            punkelias.dev
          </Link>
          <Link
            to="/"
            className="text-[13px] text-secondary transition-colors duration-150 hover:text-primary"
          >
            ← Back home
          </Link>
        </nav>
      </header>

      <main className="flex min-h-[calc(100vh-3.5rem-73px)] items-center px-8 py-16 max-sm:px-5 max-sm:py-12">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="mb-2 inline-block text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">
            Error 404
          </span>
          <h1 className="mb-3 font-mono text-[64px] leading-none font-semibold tracking-[-0.02em] text-primary max-sm:text-[48px]">
            404
          </h1>
          <h2 className="mb-3 text-[24px] font-medium tracking-[-0.02em] text-primary">
            Page not found
          </h2>
          <p className="mx-auto mb-8 max-w-[440px] text-[15px] leading-[1.75] font-light text-secondary">
            The page you’re looking for doesn’t exist or may have been moved.
            Let’s get you back on track.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-[14px] font-medium text-primary transition duration-200 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
          >
            ← Back home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
