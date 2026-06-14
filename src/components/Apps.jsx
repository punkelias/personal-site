import styles from './Apps.module.css'

const APPS = [
  {
    id: 'facechamp',
    name: 'Facechamp',
    tagline: 'Soccer trivia mobile game',
    description: 'A fast-paced trivia game for soccer fans, available on iOS and Android. Test your knowledge across leagues, clubs, and legendary players.',
    platform: 'iOS · Android',
    status: 'live',
    statusLabel: 'Live',
    icon: '⚽',
    color: '#3DD68C',
    colorDim: 'rgba(61,214,140,0.1)',
    tech: ['React Native', 'Expo'],
  },
  {
    id: 'quiniela',
    name: 'Quiniela',
    tagline: 'World Cup 2026 predictions',
    description: 'A prediction game for friends and groups built around the 2026 World Cup. Real-time scoring, leaderboards, and match tracking via Firebase.',
    platform: 'Android · PWA',
    status: 'live',
    statusLabel: 'Live',
    icon: '🏆',
    color: '#4F8EF7',
    colorDim: 'rgba(79,142,247,0.1)',
    tech: ['React Native', 'Firebase', 'Expo'],
  },
  {
    id: 'collectors',
    name: 'Collectors',
    tagline: 'AI-powered object detection',
    description: 'A mobile app for collectors that uses the camera to identify and catalog items. Point, detect, and build your digital collection automatically.',
    platform: 'iOS · Android',
    status: 'dev',
    statusLabel: 'In development',
    icon: '📦',
    color: '#F5A623',
    colorDim: 'rgba(245,166,35,0.1)',
    tech: ['React Native', 'ML / Vision'],
  },
]

export default function Apps() {
  return (
    <section className={styles.section} id="apps">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.label}>Apps</span>
          <h2 className={styles.heading}>Things I've built</h2>
        </div>

        <div className={styles.grid}>
          {APPS.map(app => (
            <article key={app.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap} style={{ background: app.colorDim }}>
                  <span className={styles.icon} role="img" aria-label={app.name}>{app.icon}</span>
                </div>
                <span
                  className={styles.status}
                  style={{
                    color: app.status === 'live' ? var_success : var_warning,
                    background: app.status === 'live' ? 'rgba(61,214,140,0.1)' : 'rgba(245,166,35,0.1)',
                    border: `1px solid ${app.status === 'live' ? 'rgba(61,214,140,0.2)' : 'rgba(245,166,35,0.2)'}`,
                  }}
                >
                  {app.statusLabel}
                </span>
              </div>

              <h3 className={styles.appName}>{app.name}</h3>
              <p className={styles.appTagline}>{app.tagline}</p>
              <p className={styles.appDesc}>{app.description}</p>

              <div className={styles.cardFooter}>
                <div className={styles.techList}>
                  {app.tech.map(t => (
                    <span key={t} className={styles.tech}>{t}</span>
                  ))}
                </div>
                <span className={styles.platform}>{app.platform}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const var_success = '#3DD68C'
const var_warning = '#F5A623'
