import React from 'react';
import './ScreenFriendsRightColumn.scss';
import { UserMessages } from '../../ScreenMessages/ScreenMessagesRightColumn/UserMessages';


export const ScreenFriendsRightColumn = () => {
  return (
    <div className="screen-friends-right-column">
      <div className="screen-friends-right-column__header">
        <ul className="screen-friends-right-column__list">
          <li className="screen-friends-right-column__item">
            <button className="screen-friends-right-column__btn">Все друзья</button>
          </li>
        </ul>
      </div>
      <div className="screen-friends-right-column__users">
        <div className="screen-friends-right-column__user">
          <UserMessages />
        </div>
      </div>
    </div>
  );
}
