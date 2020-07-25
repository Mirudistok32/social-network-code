import React from 'react';
import './ListNavigation.scss';
import { NavIconMessage } from './NavIconMessage';
import { NavLink } from 'react-router-dom';

export const ListNavigation = ({ count = 1000 }) => {
  return (
    <ul className="list-navigation">
      <li className="list-navigation__item" >
        <NavLink className="list-navigation__item-link" to="/messages" title="Страница сообщений">
          <NavIconMessage />
        </NavLink>
      </li>
    </ul>
  );
}
