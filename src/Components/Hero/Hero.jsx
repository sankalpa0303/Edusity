import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/arrow1.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          A university is a higher education institution where students pursue undergraduate and postgraduate degrees. 
          It offers academic programs in various fields like science, engineering, arts, business, and medicine. 
          Universities are centers of learning, research, and innovation, helping students develop knowledge, skills, 
          and critical thinking for their future careers.
        </p>
        <button className='btn'>Explore more<img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  );
}

export default Hero;
