import React from 'react'
import './Aboutus.css'

import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play_icon1.png'


const Aboutus = () => {
  return (
    <div className='about'>
      <div className='about_left'>
        <img src={about_img} alt="" className='about-img'/>
          <img src={play_icon} alt="" className='play_icon'/>

        </div>
      <div className='about_right'>
    <h3>ABOUT UNIVERSITY</h3>
    <h2>nurturing Tomorrow's Leaders Today</h2>
    <p>Welcome to our university — a place where knowledge meets purpose. We are a leading institution committed to     academic excellence, innovation, and personal development. With a rich tradition of higher education, our university offers a wide range of undergraduate and postgraduate programs designed to equip students with the skills and mindset to thrive in a dynamic world.

        Our campus is a vibrant community of learners, researchers, and leaders, driven by curiosity and guided by integrity. Through world-class faculty, modern facilities, and a supportive environment, we nurture future professionals who are ready to make a positive impact locally and globally.

        At our core, we believe in the power of education to transform lives and shape a better tomorrow.</p>
      </div>

    </div>
  )
}

export default Aboutus
