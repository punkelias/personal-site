import { SUCCESS_COLOR, WARNING_COLOR } from '../constants'
import styles from './Apps.module.css'

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
    <section className={styles.section} id="apps">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.label}>Apps</span>
          <h2 className={styles.heading}>Personal Projects</h2>
        </div>

        <div className={styles.scroller}>
          {APPS.map((app) => (
            <article key={app.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div
                  className={styles.iconWrap}
                  style={{ background: app.colorDim }}
                >
                  <span
                    className={styles.icon}
                    role="img"
                    aria-label={app.name}
                  >
                    {app.icon}
                  </span>
                </div>
                <span
                  className={styles.status}
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
              <div className={styles.appNameWrap}>
                <h3 className={styles.appName}>{app.name}</h3>
                <span className={styles.platform}>{app.platform}</span>
              </div>
              <p className={styles.appTagline}>{app.tagline}</p>
              <p className={styles.appDesc}>{app.description}</p>

              <div className={styles.cardFooter}>
                <div className={styles.techList}>
                  {app.tech.map((t) => (
                    <span key={t} className={styles.tech}>
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
