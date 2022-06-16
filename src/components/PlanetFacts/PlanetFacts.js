import React from 'react';

const PlanetFacts = ({ rotation, revolution, radius, temperature }) => {
  return (
    <div className='facts-container'>
      <div className='fact'>
        <h4 className=' fs-200'>Rotation Time</h4>
        <p className=' fs-700'>{rotation}</p>
      </div>
      <div className='fact'>
        <h4 className=' fs-200'>Revolution Time</h4>
        <p className=' fs-700'>{revolution}</p>
      </div>
      <div className='fact'>
        <h4 className=' fs-200'>Radius</h4>
        <p className=' fs-700'>{radius}</p>
      </div>
      <div className='fact'>
        <h4 className=' fs-200'>Average Temp.</h4>
        <p className=' fs-700'>{temperature}</p>
      </div>
    </div>
  );
};

export default PlanetFacts;
