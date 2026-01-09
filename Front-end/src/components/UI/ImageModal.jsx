import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styles from "./ImageModal.module.css";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Ícones

const overlayVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  hidden: { scale: 0.95, opacity: 0 },
};

export default function ImageModal({ src, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowLeft' && typeof onPrev === 'function' && hasPrev) {
        onPrev();
      }
      if (event.key === 'ArrowRight' && typeof onNext === 'function' && hasNext) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

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
      <button className={styles.closeHint} aria-label="Fechar" onClick={onClose}>
        <FaTimes />
      </button>

      {hasPrev && (
        <button className={styles.modalNavLeft} onClick={onPrev} aria-label="Imagem anterior">
          <FaArrowLeft size={32} />
        </button>
      )}
      {hasNext && (
        <button className={styles.modalNavRight} onClick={onNext} aria-label="Próxima imagem">
          <FaArrowRight size={32} />
        </button>
      )}

      <motion.img 
        src={src} 
        alt="Visualização do projeto" 
        className={styles.modalContent}
        variants={modalVariants}
      />
    </motion.div>
  );
}