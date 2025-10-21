import React from "react";
import styles from "./LinkBottoms.module.css"; 

export default function LinkBottoms({ href, children, Icon, target, download, bottomStyle }) {

  

      
  return (
    <a
      href={href}
      className={`${styles.LinkBottoms} ${bottomStyle === 1 ? styles.backgroundFullStyle : styles.BorderStyle}`}
      target={target || "_blank"}
      download={download}
    >
      {Icon && <Icon className={styles.Icon} />}
      <span>{children}</span>
    </a>
  );
}