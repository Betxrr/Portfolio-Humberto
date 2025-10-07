import React from "react";
import styles from "./Resume.module.css";
import TextPagination from "../Pagination/ResumeTextPagination.jsx";
import { FiMapPin } from "react-icons/fi";

export default function Resume() {
  return (
    <section className={styles.section} id="resume">
      <div className={styles.ContainerBox}>
        <div className={styles.ResumeFlex}>
          <div className={styles.ResumeLeft}>
            <div className={styles.ResumePhoto}>
              <img alt="Profile" src="/images/Profile-Image.jpg" />
            </div>
            <div
              className={styles.ResumeText}
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              Humberto da Rosa Rodrigues
            </div>
            <div className={styles.LinhaCentralizada}></div>

            <div
              className={styles.ResumeText}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginTop: "2px",
              }}
            >
              <FiMapPin style={{ color: "#c62828", fontSize: "1.2em" }} />
              Navegantes, Santa Catarina - Brasil
            </div>
            <div className={styles.SkillsBox}>
              <div className={styles.SkillsSection}>
                <h4 className={styles.SkillsTitle}>Tecnologias que uso:</h4>
                <div className={styles.SkillsList}>
                  <span className={styles.SkillItem} title="React">
                    <span role="img" aria-label="React"></span>
                    ReusableSkillTagsReact
                  </span>
                  <span className={styles.SkillItem} title="JavaScript">
                    <span role="img" aria-label="JavaScript"></span>
                    ReusableSkillTagsJavaScript
                  </span>
                  <span className={styles.SkillItem} title="CSS">
                    <span role="img" aria-label="CSS"></span>
                    ReusableSkillTagsCSS
                  </span>
                  <span className={styles.SkillItem} title="SQL Server">
                    <span role="img" aria-label="SQL"></span>
                    ReusableSkillTagsSQLServer
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.ResumeRight}>
              <h3 className={styles.ResumeTitle}>Sobre Mim:</h3>
                <br />
              <div className={styles.ResumeText}>
                <TextPagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
