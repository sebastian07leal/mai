import React from 'react';
import  { Link  } from 'react-router-dom';
import img1 from '../Static/img.png'; 

import '../Styles/Containers/Header.css';

const Header = () => {
  return (
    <nav className="header-con">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo header-con__link">
          <img src={img1} alt="logo" className="header-con__img"/>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="#">Iglesia</Link></li>
          <li><Link to="#">¿Eres un nuevo?</Link></li>
          <li><Link to="#">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;