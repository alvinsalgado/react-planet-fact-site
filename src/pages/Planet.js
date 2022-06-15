import React, { useState } from 'react';
import { Tabs } from '../components';
import { data } from '../utils/index';
const Planet = ({ active }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const { planets } = data;

  const { name, overview, structure, geology, rotation, revolution, radius, temperature, images } = planets[active];

  return (
    <main className='grid-container'>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} name={name} />
    </main>
  );
};

export default Planet;
