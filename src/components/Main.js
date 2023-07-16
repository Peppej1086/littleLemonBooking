import React from 'react';
import salad from '../assets/salad.jpg';
import bruschetta from '../assets/bruchetta.png';
import dessert from '../assets/dessert.jpg';
import carrello from '../assets/Basket.svg';
import star from '../assets/star.jpg';
import ben from '../assets/Benjamin.jpg';
import olivia from '../assets/Olivia.jpg';
import sofia from '../assets/Sophia.jpg';
import ethan from '../assets/Ethan.jpg';
import food from '../assets/restauranfood.jpg';
import collegues from '../assets/Mario and Adrian b.jpg'

function Main() {
  return (
    <main>
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
      <div className='mainTestimonialSection'>
        <div className='container'>
          <div className='mainTestimonial'>
            <h2>Testimonials</h2>
          </div>
          <div className='mainTestimonialCardSection'>
            <div className='maniTestimonialCard'>
              <div className='cardHeader'>
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
              </div>
              <div className='cardContent'>
                <div className='cardFlexContent'>
                  <img src={ethan} alt='ethan' />
                  <h4>Ethan Y.</h4>
                </div>
                <p>"A refreshing combo of arugula and Parmesan with a light dressing. Simple and healthy."</p>
              </div>
            </div>
            <div className='maniTestimonialCard'>
              <div className='cardHeader'>
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
              </div>
              <div className='cardContent'>
                <div className='cardFlexContent'>
                  <img src={olivia} alt='olivia' />
                  <h4>Olivia B.</h4>
                </div>
                <p>"Classic Italian appetizer with toasted bread, tomatoes, and basil. Burst of flavors."</p>
              </div>
            </div>
            <div className='maniTestimonialCard'>
              <div className='cardHeader'>
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
              </div>
              <div className='cardContent'>
                <div className='cardFlexContent'>
                  <img src={ben} alt='ben' />
                  <h4>Benjamin C.</h4>
                </div>
                <p>"Heavenly dessert with layers of coffee-soaked ladyfingers, mascarpone, and cocoa."</p>
              </div>
            </div>
            <div className='maniTestimonialCard'>
              <div className='cardHeader'>
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
              </div>
              <div className='cardContent'>
                <div className='cardFlexContent'>
                  <img src={sofia} alt='sofia' />
                  <h4>Sophia W.</h4>
                </div>
                <p>"Comforting dessert with baked apples, cinnamon,
                  and a crispy crumble topping. Served with vanilla ice cream."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mainDescriptionSection'>
        <div className='container'>
          <div className='mainDescription'>
            <div className='mainFirstConteiner'>
              <h2>Little Lemon<br></br>Restaurant</h2>
              <h3>Munich</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
            </div>
            <div className='mainLastContainer'>
              <img src={collegues} alt='collegues' />
              <img src={food} alt='food' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
