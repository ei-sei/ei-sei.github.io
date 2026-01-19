import styles from "./Skills.module.css";
import { skillCategories } from "../../models/skillsData";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Technical Skills</h2>
          <p>Proficient in modern cloud technologies and DevOps practices</p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.name} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.name}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill} className={styles.skillItem}>
                    <span className={styles.skillDot}></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
