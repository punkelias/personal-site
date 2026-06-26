import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border px-8 py-6 max-sm:px-5">
      <div className="mx-auto flex max-w-[900px] items-center justify-between text-[12px] text-tertiary max-sm:flex-col max-sm:items-start max-sm:gap-1">
        <span>© {new Date().getFullYear()} Elias</span>
        <div className="flex items-center gap-4 max-sm:gap-3">
          <Link
            to="/privacy-policy/football-pool-app"
            className="transition-colors duration-150 hover:text-secondary"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
