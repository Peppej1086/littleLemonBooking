import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png';
import burger from '../assets/hamburger menu.svg';
import menu from '../assets/menu.jpg'

function Nav() {
  return (
    <nav>
      <div className='container navSection'>
        <div className='navLogoContainer'>
          <img src={Logo} alt="Logo" />
        </div>
        <div className='navListContainer'>
          <ul>
            <li className='navList'><Link to="/">Home</Link></li>
            <li className='navList'><Link to="/about">About</Link></li>
            <li className='navList'><a href={menu} target="_blank" rel="noopener noreferrer">Menu</a></li>
            <li className='navList'><Link to="/reservations">Reservations</Link></li>
            <li className='navList'><Link to="/order-online">Order Online</Link></li>
            <li className='navList'><Link className='buttonStyle' to="/login">Login</Link></li>
            <li className='burgerIcon'><img src={burger} alt='mobilMenu' /></li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Nav;
