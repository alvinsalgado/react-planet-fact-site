import React from 'react';
import { images } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';
const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 1, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    scale: 1.5,

    transition: { ease: 'easeInOut', duration: 1 },
  },
};
const PlanetInfo = ({
  name,
  activeTab,
  overview,
  source,
  structure,
  geology,
}) => {
  return (
    <div className='planet-info-container'>
      <AnimatePresence>
        {'overview' === activeTab && (
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='planet-info-motion'
          >
            <h2 className='planet-name fs-800'>{name}</h2>
            <p className='planet-info fs-600'>{overview.content}</p>
            <div className='source'>
              <span className='fs-300'>Source:</span>
              <a className='fs-300' href={overview.source}>
                Wikipedia
              </a>
              <span>
                <img src={images.source} alt='source' />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {'structure' === activeTab && (
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='planet-info-motion'
          >
            <h2 className='planet-name fs-800'>{name}</h2>

            <p className='planet-info fs-600'>{structure.content}</p>
            <div className='source'>
              <span className='fs-300'>Source:</span>
              <a className='fs-300' href={structure.source}>
                Wikipedia
              </a>
              <span>
                <img src={images.source} alt='source' />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {'surface' === activeTab && (
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='planet-info-motion'
          >
            <h2 className='planet-name fs-800'>{name}</h2>

            <p className='planet-info fs-600'>{geology.content}</p>
            <div className='source'>
              <span className='fs-300'>Source:</span>
              <a className='fs-300' href={geology.source}>
                Wikipedia
              </a>
              <span>
                <img src={images.source} alt='source' />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetInfo;
