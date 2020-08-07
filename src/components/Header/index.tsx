import React from 'react';
import './Header.scss';
import { Logo } from './Logo/Logo';
import { WindowProfile } from './WindowProfile/WindowProfile';
import { ListNavigation } from './ListNavigation';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <ListNavigation />
        <WindowProfile />
      </div>
    </div>
  );
}
