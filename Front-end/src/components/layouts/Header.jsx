import React from "react";
import styles from "./Header.module.css";
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 750) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scrolled ? `${styles.header} ${styles.scrolled}` : styles.header
      }
    >
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>
          H<span>RR</span>
        </h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#hero">
                <FaHome /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#resume">
                <IoDocumentText />
                <span>Sobre Mim</span>
              </a>
            </li>
            <li>
              <a href="#works">
                <FaBriefcase /> <span>Projetos </span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <FaEnvelope /> <span>Contatos</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}