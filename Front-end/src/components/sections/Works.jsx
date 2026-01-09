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
       
          <Project
            images={[
              "/images/ProjectImages/CrudClientes.png",
              "/images/ProjectImages/CrudClientes2.png",
              "/images/ProjectImages/CrudClientes3.png",
              "/images/ProjectImages/CrudClientes4.png"
            ]}
            title="CRUD de Clientes (Multi-Tenant)"
            description="Criei esse projeto com o objetivo de treinar Typescript e estudar novas abordagens utilizando React, então me desafiei a construir um CRUD completo utilizando Zod e React Hook Form, simulando todo o fluxo de consumo de uma API, mas utilizando uma arquitetura de banco de dados falso (Mock Database) via LocalStorage. Tentei deixar tudo pronto para receber um back-end real e, apesar de simples, também tentei garantir que a validação dos dados e a navegação funcionassem exatamente como se esperaria de um sistema profissional conectado a um servidor. "
            projectUrl="https://github.com/Betxrr/CRUD-de-Clientes"
            technologies={[
              { name: "React", color: "react" },
              { name: "TypeScript", color: "typescript" },
              { name: "Vite", color: "api" },
              { name: "Tailwind CSS v4", color: "tailwind" },
              { name: "React Router v7", color: "redux" },
              { name: "Zod", color: "zod" },
              { name: "React Hook Form", color: "zod" },
              { name: "LocalStorage API", color: "nodejs" }
            ]}
          />
          
        </div>
      </motion.div>
    </section>
  );
}