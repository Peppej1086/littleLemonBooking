import React from 'react';
import logo from '../assets/Logo.png';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <section className='footerLogo'>
            <img src={logo} alt='logo' />
        </section>
        <section>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </div>
          </section>
          <section>
          <div>
            <h4>Social Media Links</h4>
            <ul>
              <li>Instagramm</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
