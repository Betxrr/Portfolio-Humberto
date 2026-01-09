import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from "../Project.module.css"; 
import SkillTag from "../Tags/SkillTag"; 

export default function ProjectInfo({ title, description, technologies, projectUrl }) {
  return (
    <div className={styles.ProjectInfo}>
      <h3>{title}</h3>
      <div className={styles.ProjectDescriptionScroll}>{description}</div>
      
      <div className={styles.TagsSection}>
        <h3>Tecnologias usadas:</h3>
        <div className={styles.TagsContainer}>
          {technologies.map((tech, index) => (
            <SkillTag key={index} color={tech.color} icon={tech.icon}>
              {tech.name}
            </SkillTag>
          ))}
        </div>
      </div>

      <div className={styles.ProjectLinkSection}>
        <div className={styles.LinhaCentralizada} />
                <a
          href={projectUrl}
          className={styles.ProjectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={{ marginRight: '8px' }} size={18} />
          <span>Ver Projeto</span>
        </a>
      </div>
    </div>
  );
}