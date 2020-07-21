import React from 'react';
import './Header.scss';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Logo />
      </div>
    </div>
  );
}
