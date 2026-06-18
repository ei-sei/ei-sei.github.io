// Sheikh Khaled Ahmed (ei-sei)
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About</h2>
        <div className={styles.content}>
          <p>
            I'm a Cloud and DevOps Engineer who builds infrastructure by hand
            before automating it. Most of my work lives in Terraform and
            Docker Compose files, AWS consoles, and CI/CD pipelines that
            deploy without me needing to SSH in afterward.
          </p>
          <p>
            My approach is Infrastructure-as-Code first: if a deployment step
            can't be reproduced from a config file, it isn't finished. I care
            about systems that fail predictably, recover automatically, and
            don't depend on tribal knowledge to operate.
          </p>
          <p>
            Right now I'm focused on AWS (VPC design, ECS, Lambda, IAM
            least-privilege), containerization with Docker and Kubernetes,
            and building production systems that run with real users, not
            just in a lab.
          </p>
        </div>
      </div>
    </section>
  );
}
