import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from './Works.module.css';

export default function Works() {
    return (
        <section className={styles.section} id="works">
            <div className={styles.Limiter}>
                <h2 className={styles.WorksTitle}>Projetos</h2>
                <div className={styles.ProjectsGrid}>
   
                    <div className={styles.ProjectCard}>
                        <div className={styles.ProjectImage}></div>
                        <div className={styles.ProjectInfo}>
                            <h3 className={styles.ProjectName}>Projeto 1</h3>
                            <p className={styles.ProjectDescription}>Descrição do projeto 1.</p>
                            <a href="#" className={styles.ProjectLink}>
                                <FaGithub style={{ marginRight: "8px" }} />
                                Ver Projeto
                            </a>
                        </div>
                    </div>
                    <div className={styles.ProjectCard}>
                        <div className={styles.ProjectImage}></div>
                        <div className={styles.ProjectInfo}>
                            <h3 className={styles.ProjectName}>Projeto 2</h3>
                            <p className={styles.ProjectDescription}>Descrição do projeto 2.</p>
                            <a href="#" className={styles.ProjectLink}>
                                <FaGithub style={{ marginRight: "8px" }} />
                                Ver Projeto
                            </a>
                        </div>
                    </div>
                    <div className={styles.ProjectCard}>
                        <div className={styles.ProjectImage}></div>
                        <div className={styles.ProjectInfo}>
                            <h3 className={styles.ProjectName}>Projeto 3</h3>
                            <p className={styles.ProjectDescription}>Descrição do projeto 3.</p>
                            <a href="#" className={styles.ProjectLink}>
                                <FaGithub style={{ marginRight: "8px" }} />
                                Ver Projeto
                            </a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    );
}