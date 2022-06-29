import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -40,
    x: -200,
    y: 200,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: { delay: 1, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotate: 40,
    x: 200,
    y: -200,
    transition: { ease: 'easeInOut', duration: 1 },
  },
};
const PlanetImage = ({ activeTab, name, images }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={`img-container`}
    >
      <AnimatePresence>
        {'overview' === activeTab && (
          <motion.img
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            src={images.planet}
            alt='planet'
            className={`img-planet img-container-${name}`.toLowerCase()}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {'structure' === activeTab && (
          <motion.img
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            src={images.internal}
            alt='internal'
            className={`img-planet img-container-${name}`.toLowerCase()}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {'surface' === activeTab && (
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className={`img-surface-container`}
          >
            <img
              src={images.planet}
              alt='planet'
              className={`img-planet img-container-${name}`.toLowerCase()}
            />
            <img src={images.geology} alt='geology' className='img-geology' />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PlanetImage;
