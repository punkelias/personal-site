export default function Footer() {
  return (
    <footer className="border-t border-border px-8 py-6 max-[480px]:px-5">
      <div className="mx-auto flex max-w-[900px] justify-between text-[12px] text-tertiary max-[480px]:flex-col max-[480px]:gap-1">
        <span>© {new Date().getFullYear()} Elias</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  )
}
