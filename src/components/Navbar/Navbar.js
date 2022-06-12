import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data, images } from '../../utils';

const Navbar = ({ active, setActive }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { links } = data;

  return (
    <nav className='navbar'>
      <h1 className='logo fs-900'>THE PLANETS</h1>

      <ul className='navbar-desktop-links '>
        {links.map((planet, index) => {
          const { id, name, url } = planet;
          return (
            <li className='fs-400' key={id}>
              <div>
                <Link
                  onClick={() => {
                    setActive(index);
                  }}
                  to={url}
                  className={`fs-400 ${active === index ? `${name}-border` : ''}`}
                >
                  {name}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <button className={`hamburger ${toggleMenu ? 'remove' : ''}`} onClick={() => setToggleMenu(!toggleMenu)}>
        <img src={images.hamburger} alt='open' />
      </button>
      {toggleMenu && (
        <div className='navbar-mobile'>
          <button className='hamburger' onClick={() => setToggleMenu(!toggleMenu)}>
            <img src={images.close} alt='close' />
          </button>

          <ul className='navbar-mobile-links'>
            {links.map((planet, index) => {
              const { id, name, url } = planet;
              return (
                <li key={id}>
                  <div>
                    <span className={`circle ${`circle-${name}`}`}></span>
                    <Link
                      className='fs-400'
                      onClick={() => {
                        setToggleMenu(false);
                        setActive(index);
                      }}
                      to={url}
                    >
                      {name}
                    </Link>
                  </div>
                  <span className='chevron'>
                    <img src={images.chevron} alt='chevron' />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;