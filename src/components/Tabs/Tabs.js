import React from 'react';

const Tabs = ({ activeTab, setActiveTab, name }) => {
  name = name.toLowerCase();
  return (
    <div className='tab-container'>
      <button onClick={() => setActiveTab('overview')} className={`tab-btn fs-500 ${'overview' === activeTab && `active-tab-${name}`}`}>
        <span>01</span>
        overview
      </button>
      <button onClick={() => setActiveTab('structure')} className={`tab-btn fs-500 ${'structure' === activeTab && `active-tab-${name}`}`}>
        <span>02</span>
        structure
      </button>
      <button onClick={() => setActiveTab('surface')} className={`tab-btn fs-500 ${'surface' === activeTab && `active-tab-${name}`}`}>
        <span>03</span>
        surface
      </button>
    </div>
  );
};

export default Tabs;
