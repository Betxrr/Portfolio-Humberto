import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../Project.module.css'; 
import ImageModal from '../ImageModal'; 

export default function ProjectImage({ images = [] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (direction) => {
    if (images.length === 0) return;

    let newIndex = direction === 'left' ? currentImageIndex - 1 : currentImageIndex + 1;
    if (newIndex < 0) newIndex = images.length - 1;
    else if (newIndex >= images.length) newIndex = 0;
    
    setCurrentImageIndex(newIndex);
  };

  const openModal = () => images.length > 0 && setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const hasImages = images.length > 0;

  return (
    <>
      <div
        className={styles.ProjectImage}
        style={{
          backgroundImage: hasImages ? `url(${images[currentImageIndex]})` : 'none',
          cursor: hasImages ? 'pointer' : 'default',
        }}
        onClick={openModal}
      >
        {hasImages && (
          <>
            <button
              className={`${styles.ImageButton} ${styles.ImageButtonLeft}`}
              onClick={(e) => { e.stopPropagation(); handleImageChange('left'); }}
            >
              <FaArrowLeft />
            </button>
            <button
              className={`${styles.ImageButton} ${styles.ImageButtonRight}`}
              onClick={(e) => { e.stopPropagation(); handleImageChange('right'); }}
            >
              <FaArrowRight />
            </button>
          </>
        )}
      </div>

      {isModalOpen && hasImages && (
        <ImageModal
          src={images[currentImageIndex]}
          onClose={closeModal}
        />
      )}
    </>
  );
}