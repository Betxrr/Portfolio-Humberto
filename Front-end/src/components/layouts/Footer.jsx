import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.section}>
      <div className={styles.limiter}>
        <div>
          <p
            className={styles.text}
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Humberto da Rosa Rodrigues
          </p>
          <p
            className={styles.text}
            style={{
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "#fff",
              margin: "16px 0",
            }}
          >
            &quot;Este é meu Website e Portfólio oficial. Todos os detalhes dos
            trabalhos desenvolvidos por mim estarão aqui.&quot;
          </p>
          <div className={styles.LinhaCentralizada}></div>
          <br />
          <p className={styles.text}>
            © Copyright <span className={styles.bold}>Humberto Rodrigues</span>{" "}
            {new Date().getFullYear()}. All Rights Reserved
          </p>
          <p className={styles.text}>
            Desenvolvido por{" "}
            <span className={styles.bold}> Humberto Rodrigues </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
