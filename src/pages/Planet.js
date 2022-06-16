import React, { useState } from 'react';
import { Tabs, PlanetImage, PlanetInfo, PlanetFacts } from '../components';
import { data } from '../utils/index';
const Planet = ({ active }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const { planets } = data;

  const { name, overview, structure, geology, rotation, revolution, radius, temperature, images } = planets[active];

  return (
    <main className='grid-container'>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} name={name} />
      <PlanetImage activeTab={activeTab} name={name} images={images} />
      <PlanetInfo activeTab={activeTab} name={name} overview={overview} structure={structure} geology={geology} />
      <PlanetFacts rotation={rotation} revolution={revolution} radius={radius} temperature={temperature} />
    </main>
  );
};

export default Planet;
