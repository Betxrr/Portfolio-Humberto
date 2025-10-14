 import React from "react";
 import styles from "./ImageModal.module.css";

 export default function ImageModal({ src, onClose }) {

    const handleOverlayClick = (event) => {

        if(event.target === event.currentTarget) {
            onClose();
        }

    }


    return (
        
 <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <img src={src} alt="Visualização do projeto" className={styles.modalContent} />
    </div>
    );
}
