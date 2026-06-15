export default function Contact() {
  return (
    <section
      className="border-t border-border px-8 pt-20 pb-24 max-sm:px-5 max-sm:pt-14 max-sm:pb-16"
      id="contact"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10">
          <span className="mb-2 inline-block text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">
            Contact
          </span>
          <h2 className="text-[28px] font-medium tracking-[-0.02em] text-primary">
            Get in touch
          </h2>
        </div>

        <div className="max-w-[520px] rounded-lg border border-border bg-surface p-8 max-sm:p-6">
          <p className="mb-7 text-[14px] leading-[1.7] font-light text-secondary">
            Whether it's a project, a collaboration, or just to say hi, reach
            out and I'll get back to you.
          </p>

          <div className="flex flex-col gap-1">
            <a
              href="mailto:me@punkelias.com"
              className="flex items-center gap-3.5 rounded-md px-3.5 py-3 transition-colors duration-150 hover:bg-elevated"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border bg-elevated text-accent">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div className="flex flex-col gap-px">
                <span className="text-[11px] font-medium tracking-[0.04em] text-tertiary uppercase">
                  Email
                </span>
                <span className="text-[13px] text-primary">
                  me@punkelias.com
                </span>
              </div>
            </a>

            <a
              href="https://github.com/punkelias"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 rounded-md px-3.5 py-3 transition-colors duration-150 hover:bg-elevated"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border bg-elevated text-accent">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </span>
              <div className="flex flex-col gap-px">
                <span className="text-[11px] font-medium tracking-[0.04em] text-tertiary uppercase">
                  GitHub
                </span>
                <span className="text-[13px] text-primary">
                  github.com/punkelias
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
