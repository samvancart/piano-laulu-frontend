import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import { Button } from './Button';



function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const varaaLink = () => {
    return (
      <li className='nav-item'>
        <Link to='/varaa' className='nav-links' onClick={closeMobileMenu}>
          Varaa keikka
        </Link>
      </li>
    )
  }

  const varaaBtn = () => {
    return (
      button && <li className='nav-item'><Button buttonStyle='btn--outline'>Varaa keikka</Button></li>
    )
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  function btnLink(props) {
    if (button === true) {
      console.log('show!');
      return varaaBtn();
    }
    console.log('No show');
    return varaaLink();

  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container-left'>
          <Link to="/" className="navbar-logo">
            Piano-laulu
            {/* <i classname="fab fa-typo3"></i> */}
          </Link>
        </div>
        <div className='navbar-container-right'>
          <div className='menu-icon' onClick={handleClick}>
            <i>
              {click ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            {btnLink()}
            {/* <li className='nav-btn'>
              <Link to='/varaa' className='nav-btn-links' onClick={closeMobileMenu}>
                Varaa
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Sign up</Button>} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar