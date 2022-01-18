import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <p>Tilda<span class="navbar-logo-color"> Engberg.</span></p>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <NavLink
                to='/'
                className='nav-links'
                exact={true}
                activeClassName='is-active'
                onClick={closeMobileMenu}>
                Hem
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/projekt'
                className='nav-links'
                activeClassName='is-active'
                onClick={closeMobileMenu}>
                Projekt
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/om'
                className='nav-links'
                activeClassName='is-active'
                onClick={closeMobileMenu}>
                Om mig
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
