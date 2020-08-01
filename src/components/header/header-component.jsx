import React from 'react';
import Logo from '../logo/logo.component';
import './header.style.css';

const Header = ({color}) => {
  return (
    <div className="header">
      <Logo color={color} />
      <h3 style={{color: color}} className="logo-lettering">Under</h3>
    </div>
  )
}

export default Header;