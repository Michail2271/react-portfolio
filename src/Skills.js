import React from 'react';
import styles from './Skills.module.css';


function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.skills}>
        <h1>Skills</h1>
        <div className={styles.skillBlock}>
          <div className={styles.skill}>
            <img className={styles.skillPhoto} src='' />
            <h1>my skill</h1>
            <h5>discription skill</h5>
          </div>
          <div className={styles.skill}>
            <img className={styles.skillPhoto} src='' />
            <h1>my skill</h1>
            <h5>discription skill</h5>
          </div>
          <div className={styles.skill}>
            <img className={styles.skillPhoto} src='' />
            <h1>my skill</h1>
            <h5>discription skill</h5>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Skills;
