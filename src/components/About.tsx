const SKILLS = [
  {
    group: 'Frontend',
    items: [
      'React',
      'Vite',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Redux',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Material UI',
      'Ant Design',
    ],
  },
  { group: 'Mobile', items: ['React Native', 'Expo', 'iOS', 'Android'] },
  {
    group: 'Backend',
    items: [
      'Node.js',
      'Firebase',
      'Firestore',
      'Cloud Functions',
      'PostgreSQL',
      'REST APIs',
      'MySQl',
      'WebSockets',
    ],
  },
  {
    group: 'Tools',
    items: [
      'Git',
      'CI/CD',
      'Figma',
      'Prettier',
      'ESLint',
      'Storybook',
      'Docker',
      'Terraform',
    ],
  },
  { group: 'AI', items: ['Cursor', 'Claude', 'OpenAI'] },
  { group: 'Other', items: ['a11y', 'Firebase Auth', 'Push Notifications'] },
  { group: 'Languages', items: ['English', 'Spanish'] },
]

export default function About() {
  return (
    <section
      className="border-t border-border px-8 py-20 max-[700px]:px-5 max-[700px]:py-14"
      id="about"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10">
          <span className="mb-2 inline-block text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">
            About
          </span>
          <h2 className="text-[28px] font-medium tracking-[-0.02em] text-primary">
            Who I am
          </h2>
        </div>

        <div className="grid grid-cols-2 items-start gap-12 max-[700px]:grid-cols-1 max-[700px]:gap-8">
          <div className="flex flex-col gap-4 [&>p]:text-[15px] [&>p]:leading-[1.75] [&>p]:font-light [&>p]:text-secondary">
            <p>
              Hi, I'm Elias, a senior software developer with experience
              building web and mobile applications using technologies like
              React, TypeScript, Node.js, React Native, Expo, and Firebase.
            </p>

            <p>
              I enjoy creating products that feel clean, useful, and easy to
              use. My work has included frontend architecture, full-stack
              features, accessibility improvements, mobile app development,
              internal tools, and interactive digital experiences.
            </p>

            <p>
              Before focusing mainly on software products and web applications,
              I also worked in game and app development, which shaped the way I
              think about user experience, polish, and the small details that
              make software feel better.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {SKILLS.map(({ group, items }) => (
              <div key={group} className="flex flex-col gap-2">
                <span className="text-[11px] font-semibold tracking-[0.08em] text-tertiary uppercase">
                  {group}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[12px] text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
