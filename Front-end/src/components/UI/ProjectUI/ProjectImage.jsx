import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../Project.module.css'; 
import ImageModal from '../ImageModal'; 
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectImage({ images = [] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => images.length > 0 && setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleImageChange = (direction) => {
    if (images.length <= 1) return;
    let newIndex = direction === "left" ? currentImageIndex - 1 : currentImageIndex + 1;
    if (newIndex < 0) { newIndex = images.length - 1; }
    else if (newIndex >= images.length) { newIndex = 0; }
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <div className={styles.ProjectImageContainer}>
        {/* AnimatePresence detecta a mudança da imagem pela 'key' */}
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            className={styles.ProjectImage}
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            
            initial={{ opacity: 0 }} // Começa invisível
            animate={{ opacity: 1 }} // Anima para ficar visível
            exit={{ opacity: 0 }}    // Anima para ficar invisível ao sair
            transition={{ duration: 0.250 }} // Duração da animação
            onClick={openModal}
          />
        </AnimatePresence>

        {/* Os botões ficam por cima, sem alterações */}
        {images.length > 1 && (
          <>
            <button
              className={`${styles.ImageButton} ${styles.ImageButtonLeft}`}
              onClick={() => handleImageChange("left")}
            >
              <FaArrowLeft />
            </button>
            <button
              className={`${styles.ImageButton} ${styles.ImageButtonRight}`}
              onClick={() => handleImageChange("right")}
            >
              <FaArrowRight />
            </button>
          </>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <ImageModal
            src={images[currentImageIndex]}
            onClose={closeModal}
            onPrev={() => handleImageChange("left")}
            onNext={() => handleImageChange("right")}
            hasPrev={images.length > 1}
            hasNext={images.length > 1}
          />
        )}
      </AnimatePresence>
    </>
  );
}