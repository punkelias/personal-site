export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-base/85 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-[900px] items-center justify-between px-8 max-sm:px-5">
        <span className="font-mono text-sm font-medium text-accent">
          punkelias.dev
        </span>
        <div className="flex gap-8 max-sm:gap-5">
          <a
            href="#apps"
            className="text-[13px] text-secondary transition-colors duration-150 hover:text-primary"
          >
            Apps
          </a>
          <a
            href="#about"
            className="text-[13px] text-secondary transition-colors duration-150 hover:text-primary"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-[13px] text-secondary transition-colors duration-150 hover:text-primary"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
