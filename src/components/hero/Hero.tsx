import React from 'react';
import './hero.styles.scss';

const Hero = () => {
  return (
    <section className="hero is-info is-large hero-image">
      <div className="hero-body">
        <div className="container">
          <h1 className="hero-title has-text-white">
            Bags reimagined for modern life.
          </h1>
          <div className='shop-now-btn has-text-white'>
            <button className='button is-black' id='shop-now'>
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;