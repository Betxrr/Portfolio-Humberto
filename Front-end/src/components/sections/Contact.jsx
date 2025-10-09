import React from "react";
import { FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.Limiter}>
                <h2 className={styles.ContactTitle}>Contatos:</h2>
                <br />
                <div className={styles.ContactList}>
                    <div className={styles.ContactItem}>
                        <FiMail color="var(--color-primary-light)" size={24} />
                        <span>Email: <strong>humbertorodrigues473@gmail.com</strong></span>
                    </div>
                    <div className={styles.ContactItem}>
                        <FiPhone color="var(--color-primary-light)" size={24} />
                        <span>Telefone: <strong>(47) 99991-5500</strong></span>
                    </div>
                    <div className={styles.ContactItem}>
                        <FiMessageCircle color="var(--color-primary-light)" size={24} />
                        <span>WhatsApp: <strong>(47) 99991-5500</strong></span>
                    </div>
                    <div className={styles.ContactDivider}></div>
                    <h2 className={styles.ContactTitle}>Redes Sociais:</h2>
                    <div className={styles.ContactLinks} style={{ display: "flex", gap: "18px" }}>
                        <a
                            href="https://www.linkedin.com/in/humberto-rodrigues-a52b86373/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ContactLinkdin}
                       
                        >
                            <FaLinkedin size={28} color="#1976d2" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Betxrr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ContactLinkGithub}

                        >
                            <FaGithub size={28} color="#222" />
                            GitHub
                        </a>
                    </div>
                    <div style={{ width: "100%", textAlign: "center", marginTop: "32px", color: "#fff", fontStyle: "italic", fontSize: "1.08rem" }}>
                        Obrigado por visitar meu portfólio! Fique à vontade para entrar em contato.
                    </div>
                </div>
            </div>
        </section>
    );
}