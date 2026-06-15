import { SUCCESS_COLOR, WARNING_COLOR } from '../constants'

const APPS = [
  {
    id: 'quiniela',
    name: 'Quiniela',
    tagline: 'World Cup 2026 predictions',
    description:
      'A prediction game for friends and groups built around the 2026 World Cup. Real-time scoring, leaderboards, and match tracking via Firebase.',
    platform: 'Android · PWA',
    status: 'live',
    statusLabel: 'Live',
    icon: '🏆',
    color: '#4F8EF7',
    colorDim: 'rgba(79,142,247,0.1)',
    tech: ['React Native', 'Firebase', 'Expo'],
  },
  {
    id: 'futmaster',
    name: 'Futmaster',
    tagline: 'Soccer trivia mobile game',
    description:
      'A fast-paced trivia game for soccer fans, available on iOS and Android. Test your knowledge across leagues, clubs, and legendary players.',
    platform: 'iOS · Android',
    status: 'dev',
    statusLabel: 'In development',
    icon: '⚽',
    color: '#3DD68C',
    colorDim: 'rgba(61,214,140,0.1)',
    tech: ['Java', 'Objective-C'],
  },
  {
    id: 'pediatric-parent-guide',
    name: 'Pediatric Parent Guide',
    tagline: 'Pediatric tips and guidance for parents',
    description:
      'A mobile-first app created for a pediatric clinic, designed to share helpful health tips, parenting guidance, clinic updates, and pediatric news with parents. The goal is to provide clear, practical, and trustworthy educational content in one easy-to-access place.',
    platform: 'Mobile / Web',
    status: 'dev',
    statusLabel: 'In development',
    icon: '🩺',
    color: '#FF8A8A',
    colorDim: 'rgba(255,138,138,0.1)',
    tech: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
  },
  {
    id: 'personal-website',
    name: 'Personal Website',
    tagline: 'My personal website',
    description:
      'My personal website built with React, TypeScript, and Vite. It showcases my projects, skills, and contact information.',
    platform: 'Web',
    status: 'live',
    statusLabel: 'Live',
    icon: '🏠',
    color: '#F5A623',
    colorDim: 'rgba(245,166,35,0.1)',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 'game-development',
    name: 'Games & Apps',
    tagline: 'Game and interactive app development',
    description:
      'Game and interactive app development for iOS, Android, PC, consoles, and web.',
    platform: 'iOS · Android · PC · Consoles · Web',
    status: 'live',
    statusLabel: 'Live',
    icon: '🎮',
    color: '#4F8EF7',
    colorDim: 'rgba(79,142,247,0.1)',
    tech: ['Java', 'Objective-C', 'C#', 'Unity'],
  },
]

export default function Apps() {
  return (
    <section className="px-8 py-20 max-sm:px-5 max-sm:py-14" id="apps">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10">
          <span className="mb-2 inline-block text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">
            Apps
          </span>
          <h2 className="text-[28px] font-medium tracking-[-0.02em] text-primary">
            Personal Projects
          </h2>
        </div>

        <div className="scrollbar-custom flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4">
          {APPS.map((app) => (
            <article
              key={app.id}
              className="flex flex-[0_0_clamp(240px,80%,300px)] snap-start flex-col gap-2.5 rounded-lg border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-border-hover hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-1 flex items-center justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-md"
                  style={{ background: app.colorDim }}
                >
                  <span
                    className="text-[22px] leading-none"
                    role="img"
                    aria-label={app.name}
                  >
                    {app.icon}
                  </span>
                </div>
                <span
                  className="rounded-full px-2.5 py-[3px] text-[11px] font-medium"
                  style={{
                    color:
                      app.status === 'live' ? SUCCESS_COLOR : WARNING_COLOR,
                    background:
                      app.status === 'live'
                        ? `${SUCCESS_COLOR}1A`
                        : `${WARNING_COLOR}1A`,
                    border: `1px solid ${app.status === 'live' ? `${SUCCESS_COLOR}2A` : `${WARNING_COLOR}2A`}`,
                  }}
                >
                  {app.statusLabel}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-[17px] font-medium text-primary">
                  {app.name}
                </h3>
                <span className="text-[11px] whitespace-nowrap text-tertiary">
                  {app.platform}
                </span>
              </div>
              <p className="text-[13px] font-normal text-accent">
                {app.tagline}
              </p>
              <p className="flex-1 text-[13px] leading-[1.65] text-secondary">
                {app.description}
              </p>

              <div className="mt-2 flex items-center justify-between border-t border-border pt-3.5">
                <div className="flex flex-wrap gap-1.5">
                  {app.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-[4px] border border-border bg-elevated px-2 py-0.5 font-mono text-[10px] text-tertiary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
