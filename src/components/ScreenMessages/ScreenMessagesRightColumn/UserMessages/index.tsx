import React from 'react';
import './UserMessages.scss';
import avatarDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';

export type UserMessagesType = {
  avatar?: string,
  name?: string,
  text?: string,
  id?: string
}

export const UserMessages: React.FC<UserMessagesType> = ({ avatar = avatarDefault, name = "Anonimus", text = "Как дела?", id = 13 }) => {
  return (
    <div className="user-messages">
      <NavLink className="user-messages__img-link" to="/">
        <img className="user-messages__img" src={avatar} alt="avatar" />
      </NavLink>
      <NavLink className="user-messages__content" to={`/messages/${id}`}>
        <div className="user-messages__name">
          {name}
        </div>
        <div className="user-messages__text">
          {text}
        </div>
      </NavLink>
    </div>
  );
}
