import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar } from './components';
import Planet from './pages/Planet';

function App() {
  const [active, setActive] = useState(0);
  return (
    <Router>
      <Navbar active={active} setActive={setActive} />
      <Routes>
        <Route exact path='/' element={<Navigate to='/mercury' />}></Route>
        <Route exact path='/:name' element={<Planet active={active} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
