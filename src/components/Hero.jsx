import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const CODE_STRING = `const dev = {
  name: "Elias",
  focus: "Web and Mobile Apps",
  stack: ["React", "React Native", "Node.js", "TypeScript", "JavaScript"],
}`;

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
        <h1 className={styles.name}>Elias</h1>
        <p className={styles.role}>Senior Software Developer</p>

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
      </div>
    </section>
  );
}
