import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa"; // Adicionada a importação de FaGithub
import styles from "./Project.module.css";
import SkillTag from "./Tags/SkillTag";

export default function Project({
  title,
  description,
  images = [], // Define um valor padrão para evitar que seja undefined
  projectUrl,
  technologies,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction) => {
    if (images.length === 0) return; // Evita alternar se não houver imagens

    let newIndex =
      direction === "left" ? currentImageIndex - 1 : currentImageIndex + 1;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentImageIndex(newIndex);
  };

  return (
    <div className={styles.ProjectCard}>
      <div
        className={styles.ProjectImage}
        style={{
          backgroundImage: images.length > 0
            ? `url(${images[currentImageIndex]})`
            : "none",
        }}
      >
        {images.length > 0 && ( // Renderiza os botões apenas se houver imagens
          <>
            <button
              className={`${styles.ImageButton} ${styles.ImageButtonLeft}`}
              onClick={() => handleImageChange("left")}
            >
              <FaArrowLeft />
            </button>
            <button
              className={`${styles.ImageButton} ${styles.ImageButtonRight}`}
              onClick={() => handleImageChange("right")}
            >
              <FaArrowRight />
            </button>
          </>
        )}
      </div>
      <div className={styles.ProjectInfo}>
        <h3 className={styles.ProjectName}>{title}</h3>
        <p className={styles.ProjectDescription}>{description}</p>
        <div className={styles.TagsSection}>
          <h3 className={styles.ProjectName}>Tecnologias usadas:</h3>
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
          <a href={projectUrl} className={styles.ProjectLink}>
            <FaGithub style={{ marginRight: "8px" }} size={18} />
            <span className={styles.ProjectLinkText}> Ver Projeto </span>
          </a>
        </div>
      </div>
    </div>
  );
}