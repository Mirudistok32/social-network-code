import React from 'react';
import './Logo.scss';
import logo from '../../../assets/images/logo/logo.png'
import { NavLink } from 'react-router-dom';

export const Logo = React.memo(() => {
  
  return (
    <NavLink to="/main" className="logo">
      <img src={logo} alt="logo" />
    </NavLink>
  );
})
