import React, { useState } from 'react';
import './testmonials.css';
import nexticon from '../../assets/nexticon.png';
import backicon from '../../assets/backicon.png';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      img: user1,
      name: 'Pasindu Sankalpa',
      uni: 'SLITT, Sri Lanka',
      quote:
        'Edusity feels like home! I love the big classrooms, friendly teachers, and playing with my friends after learning fun things every day.',
    },
    {
      img: user2,
      name: 'Binoth Sakith',
      uni: 'SLITT, Sri Lanka',
      quote:
        'I like Edusity because I learn new things and the teachers are really kind.',
    },
    {
      img: user3,
      name: 'Lihan Sithara',
      uni: 'University of Jaffa, Sri Lanka',
      quote: "My favorite part of Edusity is the science lab – it's like magic!",
    },
    {
      img: user4,
      name: 'Nimesha Basnayaka',
      uni: 'Oxford, UK',
      quote:
        'Every day at Edusity is fun! We learn, play, and make new friends.',
    },
  ];

  // Calculate max slides (showing 2 at a time)
  const maxSlides = Math.ceil(testimonials.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  return (
    <div className='testimonials'>
      <img src={backicon} alt='Previous' className='back-btn' onClick={prevSlide} />
      <img src={nexticon} alt='Next' className='next-btn' onClick={nextSlide} />

      <div className='slider'>
        <ul style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((t, index) => (
            <li key={index} className='slide'>
              <div className='user-info'>
                <img src={t.img} alt={t.name} />
                <div>
                  <h3>{t.name}</h3>
                  <span>{t.uni}</span>
                </div>
              </div>
              <p>{t.quote}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;