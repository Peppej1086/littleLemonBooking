import React from 'react';
import fotoRestaurant from '../assets/restaurant.jpg';

function Header() {
  return (
    <header>
      <div className='container headerSection'>
        <div className='headerFirstConteiner'>
            <h1>Little Lemon<br></br>Restaurant</h1>
            <h3>Munich</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <button className='buttonStyle'><a href='/'>Reserve a table</a></button>
        </div>
        <div className='headerLastContainer'>
            <img src={fotoRestaurant} alt='Foto Restaurant'/>
        </div>

      </div>
    </header>
  );
}

export default Header;
