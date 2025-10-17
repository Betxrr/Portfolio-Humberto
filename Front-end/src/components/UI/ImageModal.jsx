import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styles from "./ImageModal.module.css";
import { FaTimes } from "react-icons/fa"; // Ícone "X"

const overlayVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  hidden: { scale: 0.95, opacity: 0 },
};

export default function ImageModal({ src, onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div 
      className={styles.modalOverlay} 
      onClick={handleOverlayClick}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3 }}
    >
      <div className={styles.closeHint} aria-hidden="true">
        <FaTimes />
      </div>

      <motion.img 
        src={src} 
        alt="Visualização do projeto" 
        className={styles.modalContent}
        variants={modalVariants}
      />
    </motion.div>
  );
}