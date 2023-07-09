import React from 'react';
import salad from '../assets/salad.jpg';
import bruschetta from '../assets/bruchetta.png';
import dessert from '../assets/dessert.jpg';

function Main() {
  return (
    <main>
      <div className='container'>
        <div className='mainTitleSection'>
          <div>
            <h2>Specials</h2>
          </div>
          <div>
          <button className='buttonStyle'><a href='/'>Reserve a table</a></button>
          </div>
        </div>
        <div className='mainCardSection'>
            <div className='mainCard'>
              <img src={salad} alt='foto salad' />
            </div>
            <div className='mainCard'>
            <img src={bruschetta} alt='foto bruschetta' />
            </div>
            <div className='mainCard'>
            <img src={dessert} alt='foto dessert' />
            </div>
          </div>
      </div>
    </main>
  );
}

export default Main;
