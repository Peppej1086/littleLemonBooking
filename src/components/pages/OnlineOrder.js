import React from "react";
import salad from '../../assets/salad.jpg';
import bruschetta from '../../assets/bruchetta.png';
import dessert from '../../assets/dessert.jpg';
import carrello from '../../assets/Basket.svg';

export default function OnlineOrder() {
    return (
        <>
        <div className="backgroundLandingPages">
            <h1 className="pagesHeading">Order Online</h1>
        </div>
        <div className='container'>
        <div className='mainTitleSection'>
          <div>
            <h2>Specials</h2>
          </div>
          <div>
            <button className='buttonStyle'><a href='/'>Online Menu</a></button>
          </div>
        </div>
        <div className='mainCardSection'>
          <div className='mainCard'>
            <img src={salad} alt='foto salad' />
            <div className='mainCardContent'>
              <div className='mainCardTitle'>
                <h4>Greek salad</h4>
                <p><span className='mainCardPrice'>12,99 €</span></p>
              </div>
              <p className='mainCardText'>
                Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
              </p>
              <div className='mainCardFooter'>
                <h4>Order a delivery</h4>
                <img src={carrello} alt='carrello' />
              </div>
            </div>
          </div>
          <div className='mainCard'>
            <img src={bruschetta} alt='foto bruschetta' />
            <div className='mainCardContent'>
              <div className='mainCardTitle'>
                <h4>Bruschetta</h4>
                <p><span className='mainCardPrice'>6,99 €</span></p>
              </div>
              <p className='mainCardText'>
                Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
              </p>
              <div className='mainCardFooter'>
                <h4>Order a delivery</h4>
                <img src={carrello} alt='carrello' />
              </div>
            </div>
          </div>
          <div className='mainCard'>
            <img src={dessert} alt='foto dessert' />
            <div className='mainCardContent'>
              <div className='mainCardTitle'>
                <h4>Lemon Dessert</h4>
                <p><span className='mainCardPrice'>5,00 €</span></p>
              </div>
              <p className='mainCardText'>
                Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
              </p>
              <div className='mainCardFooter'>
                <h4>Order a delivery</h4>
                <img src={carrello} alt='carrello' />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}