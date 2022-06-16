import React from 'react';
import { images } from '../../utils';

const PlanetInfo = ({ name, activeTab, overview, source, structure, geology }) => {
  return (
    <div className='planet-info-container'>
      <h2 className='planet-name fs-800'>{name}</h2>
      {'overview' === activeTab && <p className='planet-info fs-600'>{overview.content}</p>}
      {'structure' === activeTab && <p className='planet-info fs-600'>{structure.content}</p>}
      {'surface' === activeTab && <p className='planet-info fs-600'>{geology.content}</p>}

      {'overview' === activeTab && (
        <div className='source'>
          <span className='fs-300'>Source:</span>
          <a className='fs-300' href={overview.source}>
            Wikipedia
          </a>
          <span>
            <img src={images.source} alt='source' />
          </span>
        </div>
      )}

      {'structure' === activeTab && (
        <div className='source'>
          <span className='fs-300'>Source:</span>
          <a className='fs-300' href={structure.source}>
            Wikipedia
          </a>
          <span>
            <img src={images.source} alt='source' />
          </span>
        </div>
      )}

      {'surface' === activeTab && (
        <div className='source'>
          <span className='fs-300'>Source:</span>
          <a className='fs-300' href={geology.source}>
            Wikipedia
          </a>
          <span>
            <img src={images.source} alt='source' />
          </span>
        </div>
      )}
    </div>
  );
};

export default PlanetInfo;
