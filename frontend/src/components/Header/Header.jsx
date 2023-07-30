import React from 'react';
import { Link } from 'react-router-dom';
import  './Header.css';

const Header  = () => {
  
  return (
    <header>
      <img src="" alt="" />
      <nav className="NavLink">
        
        <Link to="/home"> Accueil</Link>
        <Link to="/about" className="About" > A propos</Link>
        <Link to="/contact" className="Contact" >Contact</Link>
      </nav>
    </header>

  );
}

export default Header;
