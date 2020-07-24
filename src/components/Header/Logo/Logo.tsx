import React from 'react';
import './Logo.scss';
import logo from '../../../assets/images/logo/logo.png'

export const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  );
}
