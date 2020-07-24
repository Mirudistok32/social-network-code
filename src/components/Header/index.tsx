import React from 'react';
import './Header.scss';
import { Logo } from './Logo/Logo';
import { WindowProfile } from './WindowProfile/WindowProfile';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <WindowProfile />
      </div>
    </div>
  );
}
