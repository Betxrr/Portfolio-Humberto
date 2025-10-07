import React from "react";
import styles from './Header.module.css';
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';


export default function Header() {
    return (
        <div className={styles.header}>
            <h1>H<span>RR</span></h1>
            {/* <span className={styles.emailContainer}><FaEnvelope /> humbertorodrigues473@gmail.com</span> */}
            <nav>
                <ul>
                    <li><a href="#hero"><FaHome /> Home</a></li>
                    <li><a href="#resume"><IoDocumentText />Sobre Mim</a></li>
                    <li><a href="#works"><FaBriefcase /> Trabalhos </a></li>
                    <li><a href="#contact"><FaEnvelope /> Contato</a></li>
                </ul>
            </nav>
        </div>
    );
}