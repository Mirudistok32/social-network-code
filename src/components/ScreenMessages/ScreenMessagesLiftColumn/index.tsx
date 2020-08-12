import React from 'react';
import './ScreenMessagesLeftColumn.scss';
import { NavLink } from 'react-router-dom';
import { NavIconMessage } from '../../Header/ListNavigation/NavIconMessage';
import { NavIconHome } from './NavIconHome';
import { NavIconFriends } from './NavIconFriends';
import { NavIconUsers } from './NavIconUsers';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';


export const ScreenMessagesLeftColumn = () => {

  const id = useSelector((state: AppStateType) => state.authReducer.id)

  return (
    <div className="screen-messages-left-column">
      <ul className="screen-messages-left-column__list">
        <li className="screen-messages-left-column__element">
          <NavLink to={`/profile/${id}`}><NavIconHome />Моя страница</NavLink>
        </li>
        <li className="screen-messages-left-column__element">
          <NavLink to='/messages'><NavIconMessage />Сообщения</NavLink>
        </li>
        <li className="screen-messages-left-column__element">
          <NavLink to='/friends'><NavIconFriends />Друзья</NavLink>
        </li>
        <li className="screen-messages-left-column__element">
          <NavLink to='/users'><NavIconUsers />Самураи</NavLink>
        </li>
      </ul>
    </div>
  );
}


