import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../Project.module.css'; 
import ImageModal from '../ImageModal'; 
import { AnimatePresence } from 'framer-motion'; 

export default function ProjectImage({ images = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleImageChange = (direction) => {
    if (images.length <= 1) return;
    let newIndex = direction === "left" ? currentImageIndex - 1 : currentImageIndex + 1;
    if (newIndex < 0) { newIndex = images.length - 1; }
    if (newIndex >= images.length) { newIndex = 0; }
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      <div
        className={styles.ProjectImage}
        style={{
          backgroundImage: images.length > 0 ? `url(${images[currentImageIndex]})` : "none",
        }}
        onClick={openModal} 
      >
        {images.length > 1 && ( 
          <>
            <button
              className={`${styles.ImageButton} ${styles.ImageButtonLeft}`}
              onClick={(e) => { e.stopPropagation(); handleImageChange("left"); }}
            >
              <FaArrowLeft />
            </button>
            <button
              className={`${styles.ImageButton} ${styles.ImageButtonRight}`}
              onClick={(e) => { e.stopPropagation(); handleImageChange("right"); }}
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
          />
        )}
      </AnimatePresence>
    </>
  );
}