import React from 'react';
import Logo from '../assets/Logo.png';

function Nav() {
  return (
    <nav>
      <div className='container navSection'>
        <div className='navLogoContainer'>
        <img src={Logo} alt="Logo"/>
        </div>
        <div className='navListContainer'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Products</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
