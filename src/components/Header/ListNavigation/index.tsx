import React from 'react';
import './ListNavigation.scss';
import { NavIconMessage } from './NavIconMessage';

export const ListNavigation = ({ count = 1000 }) => {
  return (
    <ul className="list-navigation">
      <li className="list-navigation__item" >
        <a className="list-navigation__item-link" href="/" title="Страница сообщений">
          <NavIconMessage />
        </a>
      </li>
    </ul>
  );
}
