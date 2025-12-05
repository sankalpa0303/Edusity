import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h3 className='footer-logo'>Edusity</h3>
            <p className='footer-description'>
              Empowering education through innovative learning solutions and technology.
            </p>
            <div className='social-links'>
              <a href='#' className='social-link' aria-label='Facebook'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' className='social-link' aria-label='Twitter'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#' className='social-link' aria-label='LinkedIn'>
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a href='#' className='social-link' aria-label='Instagram'>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
          
          <div className='footer-section'>
            <h4 className='footer-title'>Quick Links</h4>
            <ul className='footer-links'>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Courses</a></li>
              <li><a href='#'>Programs</a></li>
              <li><a href='#'>Campus</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </div>
          
          <div className='footer-section'>
            <h4 className='footer-title'>Support</h4>
            <ul className='footer-links'>
              <li><a href='#'>Help Center</a></li>
              <li><a href='#'>Student Portal</a></li>
              <li><a href='#'>Library</a></li>
              <li><a href='#'>Career Services</a></li>
              <li><a href='#'>Alumni</a></li>
            </ul>
          </div>
          
          <div className='footer-section'>
            <h4 className='footer-title'>Contact Info</h4>
            <div className='contact-info'>
              <p className='contact-item'>
                <i className='fas fa-map-marker-alt'></i>
                123 Malabe,pittugala
              </p>
              <p className='contact-item'>
                <i className='fas fa-phone'></i>
                +1 (555) 123-4567
              </p>
              <p className='contact-item'>
                <i className='fas fa-envelope'></i>
                info@edusity.edu
              </p>
            </div>
          </div>
        </div>
        
        <div className='footer-bottom'>
          <div className='footer-bottom-content'>
            <p className='copyright'>
              © 2026 Edusity. All rights reserved.
            </p>
            <ul className='footer-legal'>
              <li><a href='#'>Terms of Services</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Cookie Policy</a></li>
              <li><a href='#'>Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer