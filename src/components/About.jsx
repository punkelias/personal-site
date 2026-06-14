import styles from "./About.module.css";

const SKILLS = [
  { group: "Mobile", items: ["React Native", "Expo", "iOS", "Android"] },
  {
    group: "Backend",
    items: ["Firebase", "Firestore", "Cloud Functions", "Elixir"],
  },
  { group: "Frontend", items: ["React", "Vite", "TypeScript", "JavaScript"] },
  { group: "Tools", items: ["Git", "VS Code", "Figma", "Cursor"] },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.label}>About</span>
          <h2 className={styles.heading}>Who I am</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.bio}>
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

          <div className={styles.skillsWrap}>
            {SKILLS.map(({ group, items }) => (
              <div key={group} className={styles.skillGroup}>
                <span className={styles.groupLabel}>{group}</span>
                <div className={styles.skillItems}>
                  {items.map((item) => (
                    <span key={item} className={styles.skill}>
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
  );
}
