import React from "react";
import styles from "./Resume.module.css";
import TextPagination from "../Pagination/ResumeTextPagination.jsx";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import SkillTag from "../UI/Tags/SkillTag.jsx";
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { ImCog } from "react-icons/im";

export default function Resume() {
  return (
    <section className={styles.section} id="resume">
      <div className={styles.ContainerBox}>
        <div className={styles.PrimaryColorBackground}>
          <div className={styles.ResumeFlex}>
            <div className={styles.ResumeLeft}>
              <div className={styles.HeaderResumeLeft}>
                <div className={styles.ResumePhoto}>
                  <img alt="Profile" src="/images/Profile-Image.png" />
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
                    <SkillTag icon={FaReact} color="react">
                      React Js
                    </SkillTag>
                    <SkillTag icon={FaMobileAlt} color="react-native">
                      React Native CLI ( Android )
                    </SkillTag>
                    <SkillTag icon={ImCog} color="nestjs">
                      Nest Js
                    </SkillTag>
                    <SkillTag icon={FaDatabase} color="sql">
                      SQL Server
                    </SkillTag>
                    <SkillTag icon={FaGitAlt} color="git">
                      Git
                    </SkillTag>
                    <SkillTag icon={AiFillGithub} color="github">
                      GitHub
                    </SkillTag>
                    <SkillTag icon={SiRedux} color="redux">
                      Redux (básico)
                    </SkillTag>
                    <SkillTag icon={MdApi} color="api">
                      APIs REST (Express)
                    </SkillTag>
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
      </div>
    </section>
  );
}
