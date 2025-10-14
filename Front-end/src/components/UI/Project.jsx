import React from "react";
import styles from "./Project.module.css";

import ProjectImage from "./ProjectUI/ProjectImage";
import ProjectInfo from "./ProjectUI/ProjectInfo";

export default function Project({
  title,
  description,
  images,
  projectUrl,
  technologies,
}) {
  return (
    <div className={styles.ProjectCard}>
      <ProjectImage images={images} />
      <ProjectInfo
        title={title}
        description={description}
        technologies={technologies}
        projectUrl={projectUrl}
      />
    </div>
  );
}
