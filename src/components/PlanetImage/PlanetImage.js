import React from 'react';

const PlanetImage = ({ activeTab, name, images }) => {
  return (
    <div className={`img-container img-container-${name}`.toLowerCase()}>
      {'overview' === activeTab && <img src={images.planet} alt='planet' className='img-planet' />}
      {'structure' === activeTab && <img src={images.internal} alt='internal' className='img-planet' />}

      {'surface' === activeTab && (
        <div className={`img-surface-container`}>
          <img src={images.planet} alt='planet' className='img-planet' />
          <img src={images.geology} alt='geology' className='img-geology' />
        </div>
      )}
    </div>
  );
};

export default PlanetImage;
