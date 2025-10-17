import React, { useState, useEffect } from "react";
import styles from "./FloatingActions.module.css";
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);

    // ... (suas funções scrollToTop e openWhatsApp permanecem iguais) ...
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openWhatsApp = () => {
        const phoneNumber = '5547999915500';
        const message = 'Olá, Humberto! Vi seu portfólio e gostaria de conversar.';
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 750) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={styles.FloatingActions}>
            <button 
                className={styles.ActionButtonWhatsapp}
                aria-label="Abrir WhatsApp"
                onClick={openWhatsApp}
            >
                <FaWhatsapp size={28} className={styles.WhatsappIcon} />
            </button>


            <button 
                className={`${styles.ActionButton} ${isVisible ? styles.visible : ''}`}
                aria-label="Subir para o Topo"
                onClick={scrollToTop} 
            >
                <FaArrowUp size={25} color="white"/>
            </button>
        </div>
    );
}