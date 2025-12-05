import React from 'react';
import './campus.css';

import dark_arrow from '../../assets/arrow1.png';

import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery1} alt="Gallery 1" />
        <img src={gallery2} alt="Gallery 2" />
        <img src={gallery3} alt="Gallery 3" />
        <img src={gallery4} alt="Gallery 4" />
      </div>
      <button className='btn'>See more here<img src={dark_arrow} alt=""/></button>
    </div>
  );
};

export default Campus;
