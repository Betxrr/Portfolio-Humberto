import React from 'react';
import styles from './SkillTag.module.css';

import { FaReact, FaJs, FaCss3Alt, FaDatabase, FaGitAlt, FaMobileAlt, FaGithub } from 'react-icons/fa';
import { SiRedux, SiNestjs } from 'react-icons/si';
import { MdApi } from "react-icons/md";
import { ImCog } from "react-icons/im";
import { VscSymbolEvent } from 'react-icons/vsc';

const iconMap = {
  react: FaReact,
  typescript: FaJs, // Substituir por ícone TypeScript se disponível
  tailwind: FaCss3Alt, // Substituir por ícone Tailwind se disponível
  zod: ImCog, // Zod não tem ícone, usar engrenagem
  nodejs: ImCog, // Substituir por ícone Node.js se disponível
  postman: MdApi, // Substituir por ícone Postman se disponível
  'react-native': FaMobileAlt,
  javascript: FaJs,
  css: FaCss3Alt,
  sql: FaDatabase,
  git: FaGitAlt,
  github: FaGithub,
  api: MdApi,
  redux: VscSymbolEvent,
  nestjs: SiNestjs,
};

export default function SkillTag({ icon, color, children }) {
  const IconComponent = icon || iconMap[color];

  return (
    <span className={`${styles.skillTag} ${styles[color]}`}>
      {IconComponent && <IconComponent size="1em" />}
      {children}
    </span>
  );
}