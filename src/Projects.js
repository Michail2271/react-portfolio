import React from 'react';
import styles from './Projects.module.css';


function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        <h1>projects</h1>
        <div className={styles.projectsBlock}>
          <div className={styles.project}>
            <img className={styles.projectPhoto} src='' />
            <h3>project</h3>
          </div>
          <div className={styles.project}>
            <img className={styles.projectPhoto} src='' />
            <h3>project</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
