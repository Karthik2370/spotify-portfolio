import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Carousel.css';

function Carousel({ title, items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const itemsPerPage = isMobile ? 1 : 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {!isMobile && (
          <button 
            className="carousel-arrow left" 
            onClick={prevSlide}
            aria-label="Previous items"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
        )}
        
        <div className="carousel-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="carousel-items"
              initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isMobile ? 0 : -100 }}
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

        {!isMobile && (
          <button 
            className="carousel-arrow right" 
            onClick={nextSlide}
            aria-label="Next items"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        )}

        {isMobile && (
          <div className="mobile-nav">
            <button 
              className="carousel-arrow" 
              onClick={prevSlide}
              aria-label="Previous item"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="carousel-arrow" 
              onClick={nextSlide}
              aria-label="Next item"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carousel; 