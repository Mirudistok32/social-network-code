import React from 'react';
import './ScreenUsersRightColumn.scss';
import { UserMessages } from '../../ScreenMessages/ScreenMessagesRightColumn/UserMessages';

type PropsType = {
  title: string
}

export const ScreenUsersRightColumn: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="screen-friends-right-column">
      <div className="screen-friends-right-column__header">
        <ul className="screen-friends-right-column__list">
          <li className="screen-friends-right-column__item">
            <button className="screen-friends-right-column__btn">{title}</button>
          </li>
        </ul>
      </div>
      <div className="screen-friends-right-column__users">
        <div className="screen-friends-right-column__user">
          <UserMessages link={`/profile/`}  />
        </div>
      </div>
    </div>
  );
}
