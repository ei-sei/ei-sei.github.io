// Sheikh Khaled Ahmed — github.com/ei-sei
import styles from "./Skills.module.css";
import { skillCategories } from "../../models/skillsData";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills & Technologies</h2>

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.name} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.name}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill} className={styles.skillItem}>
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
