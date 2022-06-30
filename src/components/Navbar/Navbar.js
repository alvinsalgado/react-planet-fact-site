import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links, images } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', duration: 1.5 },
  },
  exit: {
    opacity: 0,
    x: '-100vh',

    transition: { ease: 'easeInOut', duration: 1 },
  },
};
const Navbar = ({ active, setActive }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar'>
      <h1 className='logo fs-900'>THE PLANETS</h1>

      <ul className='navbar-desktop-links '>
        {links.map((planet, index) => {
          const { id, name, url } = planet;
          return (
            <li className='fs-400' key={id}>
              <div>
                <NavLink
                  onClick={() => {
                    setActive(index);
                  }}
                  to={url}
                  className={`fs-400 ${`${name}-border`}`}
                >
                  {name}
                </NavLink>
              </div>
            </li>
          );
        })}
      </ul>

      <button className='hamburger' onClick={() => setToggleMenu(!toggleMenu)}>
        <img
          src={`${toggleMenu ? images.close : images.hamburger}`}
          alt='toggle-menu'
        />
      </button>
      <AnimatePresence>
        {toggleMenu && (
          <motion.ul
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='navbar-mobile-links'
          >
            {links.map((planet, index) => {
              const { id, name, url } = planet;
              return (
                <li key={id}>
                  <div>
                    <span className={`circle ${`circle-${name}`}`}></span>
                    <NavLink
                      className='fs-400'
                      onClick={() => {
                        setToggleMenu(false);
                        setActive(index);
                      }}
                      to={url}
                    >
                      {name}
                    </NavLink>
                  </div>
                  <span className='chevron'>
                    <img src={images.chevron} alt='chevron' />
                  </span>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
