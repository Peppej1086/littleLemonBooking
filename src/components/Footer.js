import React from 'react';
import logo from '../assets/Logo.png';

function Footer() {
  return (
    <footer>
      <section>
        <div>
          <img src={logo} alt='logo' />
        </div>
      </section>
      <section>
        <div>
          <h3>Document Navigation</h3>
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
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
