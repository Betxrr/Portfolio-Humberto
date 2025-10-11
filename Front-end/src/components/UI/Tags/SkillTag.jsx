import React from 'react';
import styles from './SkillTag.module.css';

import { FaReact, FaJs, FaCss3Alt, FaDatabase, FaGitAlt, FaMobileAlt, FaGithub } from 'react-icons/fa';
import { SiRedux, SiNestjs } from 'react-icons/si';
import { MdApi } from "react-icons/md";
import { ImCog } from "react-icons/im";

const iconMap = {
  react: FaReact,
  'react-native': FaMobileAlt,
  javascript: FaJs,
  css: FaCss3Alt,
  sql: FaDatabase,
  git: FaGitAlt,
  github: FaGithub,
  api: MdApi,
  redux: SiRedux,
  nestjs: SiNestjs,
};

export default function SkillTag({ icon, color, children }) {
  const IconComponent = icon || iconMap[color];

  return (
    <span className={`${styles.skillTag} ${styles[color]}`}>
      {IconComponent && <IconComponent size={18} />}
      {children}
    </span>
  );
}