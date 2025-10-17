// 1. Importe o 'motion' da biblioteca
import { motion } from "framer-motion";

import React from "react";
import styles from "./Works.module.css";
import Project from "../UI/Project.jsx";

export default function Works() {
  return (
    <section className={styles.section} id="works">
      <motion.div 
        className={styles.Limiter}
        
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.WorksTitle}>Projetos:</h2>
        <div className={styles.ProjectsGrid}>
          <Project
            images={[
              "/images/ProjectImages/Imagens-Portifolio.png",
              "/images/ProjectImages/Imagens-Portifolio2.png",
            ]}
            title="Meu Portfólio"
            description=" Meu portfólio foi o meu primeiro projeto sério publicado, foram praticamente 4 telas com uma estilização pesada, que, apesar do exagero desnecessário, serviu para eu entender e demonstrar conhecimento sobre componentes reutilizáveis, animações, CSS Module, HTML, Responsividade em telas grandes e pequenas e etc..."
            projectUrl="https://github.com/Betxrr/Portfolio-Humberto"
            technologies={[
              { name: "React", color: "react" },
              { name: "JavaScript", color: "javascript" },
              { name: "CSS", color: "css" },
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
}