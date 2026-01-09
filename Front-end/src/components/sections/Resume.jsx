import { motion } from "framer-motion";
import React from "react";
import styles from "./Resume.module.css";
import TextPagination from "../Pagination/ResumeTextPagination.jsx";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import SkillTag from "../UI/Tags/SkillTag.jsx";
import {
  FaReact,
  FaMobileAlt,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { ImCog } from "react-icons/im";

export default function Resume() {
  return (
    <section className={styles.section} id="resume">
      {/* A animação foi movida da <section> para a <div className={styles.ContainerBox}> */}
      <motion.div 
        className={styles.ContainerBox}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.PrimaryColorBackground}>
          <div className={styles.ResumeFlex}>
            <div className={styles.ResumeLeft}>
              <div className={styles.HeaderResumeLeft}>
                <div className={styles.ResumePhoto}>
                  <img alt="Profile" src="images/Profile-Image.png" />
                </div>
                <div className={styles.NomeCentralizado}>
                  Humberto da Rosa Rodrigues
                </div>
              </div>
              <div className={styles.LinhaCentralizada}></div>
              <div className={styles.LocalizacaoTexto}>
                <FiMapPin className={styles.LocationIcon} />
                Navegantes, Santa Catarina - Brasil
              </div>
              <div className={styles.LocalizacaoTexto}>
                <AiOutlineMail className={styles.LocationIcon} />
                humbertorodrigues473@gmail.com
              </div>
              <div className={styles.LocalizacaoTexto}>
                <AiFillLinkedin className={styles.LocationIcon} />
                <a
                  href="https://www.linkedin.com/in/humberto-rodrigues-a52b86373/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/humberto-rodrigues-a52b86373/
                </a>
              </div>
              <div className={styles.LocalizacaoTexto}>
                <AiFillGithub className={styles.LocationIcon} />
                <a
                  href="https://github.com/Betxrr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Betxrr
                </a>
              </div>
              <div className={styles.LinhaCentralizada}></div>
              <div className={styles.SkillsBox}>
                <div className={styles.SkillsSection}>
                  <h4 className={styles.SkillsTitle}>Hard Skills:</h4>
                  <div className={styles.SkillsList}>
                    <SkillTag color="react">React.js</SkillTag>
                    <SkillTag color="typescript">TypeScript</SkillTag>
                    <SkillTag color="tailwind">Tailwind CSS</SkillTag>
                    <SkillTag color="redux">Context API + useReducer</SkillTag>
                    <SkillTag color="zod">Zod + React Hook Form</SkillTag>
                    <SkillTag color="sql">SQL Server</SkillTag>
                    <SkillTag color="nodejs">Node.js</SkillTag>
                    <SkillTag color="postman">Postman</SkillTag>
                    <SkillTag color="api">APIs REST</SkillTag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.WhiteBackground}>
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
      </motion.div>
    </section>
  );
}