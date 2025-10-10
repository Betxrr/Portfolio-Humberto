import React  from "react";
import styles from "./FloatingActions.module.css";
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';


export default function FloatingActions() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openWhatsApp = () => {
        window.open('https://wa.me/554799915500', '_blank');
    };


    return (



        <div className={styles.FloatingActions}>

     

            <button 
            className={styles.ActionButtonWhatsapp}
            aria-label="Abrir WhatsApp"
            onClick={openWhatsApp}
            >
            <FaWhatsapp size={38} />
            </button>
       <button 
            className={styles.ActionButton}
            aria-label="Subir para o Topo"
            onClick={scrollToTop} 
            >
            <FaArrowUp size={25} />
            </button>
        </div>
    );
}