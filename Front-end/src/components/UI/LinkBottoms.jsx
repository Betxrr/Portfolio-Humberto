import React from "react";
import styles from "./LinkBottoms.module.css"; 

export default function LinkBottoms({ href, children, Icon, target, download, bottomStyle }) {
  const isDownload = Boolean(download);
  const resolvedTarget = isDownload ? "_self" : target || "_blank";
  const resolvedRel = resolvedTarget === "_blank" ? "noopener noreferrer" : undefined;
      
  return (
    <a
      href={href}
      className={`${styles.LinkBottoms} ${bottomStyle === 1 ? styles.backgroundFullStyle : styles.BorderStyle}`}
      target={resolvedTarget}
      rel={resolvedRel}
      download={download}
    >
      {Icon && <Icon className={styles.Icon} />}
      <span>{children}</span>
    </a>
  );
}