import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

function App() {
  const [active, setActive] = useState(0);
  return (
    <Router>
      <Navbar active={active} setActive={setActive} />
    </Router>
  );
}

export default App;
