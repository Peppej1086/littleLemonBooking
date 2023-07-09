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
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a className='buttonStyle' href="/login">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
