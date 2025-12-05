import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" />

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={menuOpen ? 'open' : ''}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-340} duration={500} onClick={closeMenu}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMenu}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-340} duration={500} onClick={closeMenu}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Testimonials</Link></li>
        <li>
          <button className='btn2'>
            <Link to='contactus' smooth={true} offset={-260} duration={500} onClick={closeMenu}>Contact Us</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
