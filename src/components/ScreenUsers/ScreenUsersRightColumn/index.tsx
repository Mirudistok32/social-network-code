import React from 'react';
import './ScreenUsersRightColumn.scss';
import { UserMessages } from '../../ScreenMessages/ScreenMessagesRightColumn/UserMessages';
import { UserType } from '../../../redux/users-reducer';

type PropsType = {
  title?: string
  users: Array<UserType>
}

export const ScreenUsersRightColumn: React.FC<PropsType> = ({ title, users }) => {

  // console.log(users);
  let usersList = users.map(i => <UserMessages
    key={i.id}
    link={`/profile/`}
    id={i.id}
    name={i.name}
    status={i.status}
    photoLarge={i.photos.large}
    photoSmall={i.photos.small}
  />)

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
          {
            usersList
          }
        </div>
      </div>
    </div>
  );
}
