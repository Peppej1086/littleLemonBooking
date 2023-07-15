import React from 'react';
import Logo from '../assets/Logo.png';
import burger from '../assets/hamburger menu.svg'

function Nav() {
  return (
    <nav>
      <div className='container navSection'>
        <div className='navLogoContainer'>
        <img src={Logo} alt="Logo"/>
        </div>
        <div className='navListContainer'>
          <ul>
            <li className='navList'><a href="/">Home</a></li>
            <li className='navList'><a href="/about">About</a></li>
            <li className='navList'><a href="/menu">Menu</a></li>
            <li className='navList'><a href="/reservations">Reservations</a></li>
            <li className='navList'><a href="/order-online">Order Online</a></li>
            <li className='navList'><a className='buttonStyle' href="/login">Login</a></li>
            <li className='burgerIcon'><img src={burger}  alt='mobilMenu'/></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
