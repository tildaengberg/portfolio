import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
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
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}>
                Hem
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/projekt'
                className='nav-links'
                onClick={closeMobileMenu}>
                Projekt
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/om'
                className='nav-links'
                onClick={closeMobileMenu}>
                Om mig
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
