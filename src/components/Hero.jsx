import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const CODE_STRING = `const dev = {
  name: "Elias",
  focus: "Mobile Apps",
  stack: ["React Native", "Firebase", "Elixir"],
}`;

const TECH_TAGS = [
  "React Native",
  "Expo",
  "Firebase",
  "Elixir",
  "TypeScript",
  "iOS & Android",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < CODE_STRING.length) {
        setDisplayed(CODE_STRING.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 22);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Available for projects
        </div> */}

        <h1 className={styles.name}>Elias</h1>
        <p className={styles.role}>Senior Software Developer</p>
        {/* <p className={styles.location}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Saltillo, Coahuila · México
        </p> */}

        <div
          className={styles.codeBlock}
          aria-label="Code snippet introducing the developer"
        >
          <div className={styles.codeHeader}>
            <span className={styles.dot2} style={{ background: "#FF5F57" }} />
            <span className={styles.dot2} style={{ background: "#FFBD2E" }} />
            <span className={styles.dot2} style={{ background: "#28C840" }} />
            <span className={styles.filename}>profile.js</span>
          </div>
          <pre className={styles.code}>
            <code>
              {displayed}
              <span className={done ? styles.cursorHide : styles.cursor}>
                |
              </span>
            </code>
          </pre>
        </div>

        <div className={styles.tags}>
          {TECH_TAGS.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
