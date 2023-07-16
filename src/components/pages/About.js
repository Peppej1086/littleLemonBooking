import React from "react";
import food from '../../assets/restauranfood.jpg';
import collegues from "../../assets/Mario and Adrian b.jpg";

export default function About() {
    return (
        <>
        <div className="backgroundLandingPages">
            <h1 className="pagesHeading">About us</h1>
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
        </>
    );
}