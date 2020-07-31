import React from 'react';
import './ScreenMessagesLeftColumn.scss';
import { NavLink } from 'react-router-dom';
import { NavIconMessage } from '../../Header/ListNavigation/NavIconMessage';
import { NavIconHome } from './NavIconHome';
import { NavIconFriends } from './NavIconFriends';
import { NavIconUsers } from './NavIconUsers';


export const ScreenMessagesLeftColumn = () => {
  return (
    <div className="screen-messages-left-column">
      <ul className="screen-messages-left-column__list">
        <li className="screen-messages-left-column__element">
          <NavLink to='/'><NavIconHome />Моя страница</NavLink>
        </li>
        <li className="screen-messages-left-column__element">
          <NavLink to='/messages'><NavIconMessage />Сообщения</NavLink>
        </li>
        <li className="screen-messages-left-column__element">
          <NavLink to='/friends'><NavIconFriends />Друзья</NavLink>
        </li>
        <li className="screen-messages-left-column__element">
          <NavLink to='/users'><NavIconUsers />Все пользователи</NavLink>
        </li>
      </ul>
    </div>
  );
}
