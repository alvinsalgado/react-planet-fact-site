import React, { useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components';
import Planet from './pages/Planet';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  const [active, setActive] = useState(0);
  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path='/' element={<Navigate to='/mercury' />}></Route>
          <Route
            exact
            path='/:name'
            element={<Planet active={active} />}
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
