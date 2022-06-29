import React, { useState } from 'react';
import { Tabs, PlanetImage, PlanetInfo, PlanetFacts } from '../components';
import { data } from '../utils/index';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5 },
  },
  exit: {
    opacity: 0,
    scale: 1.5,

    transition: { ease: 'easeInOut', duration: 1 },
  },
};

const Planet = ({ active }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const { planets } = data;

  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
    images,
  } = planets[active];

  return (
    <motion.main
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='grid-container'
    >
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} name={name} />
      <PlanetImage activeTab={activeTab} name={name} images={images} />
      <PlanetInfo
        activeTab={activeTab}
        name={name}
        overview={overview}
        structure={structure}
        geology={geology}
      />
      <PlanetFacts
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </motion.main>
  );
};

export default Planet;
