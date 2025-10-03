import React from "react";
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>H<span style={{ color: 'var(--color-primary)' }}>RR</span></h1>
              <span>humbertorodrigues@gmail.com</span>
            <nav>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}