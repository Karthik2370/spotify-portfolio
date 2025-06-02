import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Carousel.css';

function Carousel({ title, items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= items.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.max(0, items.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="carousel-section">
      <h2 className="section-heading">{title}</h2>
      <div className="carousel-container">
        <button 
          className="carousel-arrow left" 
          onClick={prevSlide}
          aria-label="Previous items"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="carousel-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="carousel-items"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              {visibleItems.map((item, index) => (
                <div key={index} className="carousel-item">
                  {item}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          className="carousel-arrow right" 
          onClick={nextSlide}
          aria-label="Next items"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Carousel; 