import React from 'react';
import './UserMessages.scss';
import avatarDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';

export type UserMessagesType = {
  photoLarge: string | null
  photoSmall: string | null
  name: string,
  status: string,
  id: string,
  link?: string
}

export const UserMessages: React.FC<UserMessagesType> = ({ photoLarge, photoSmall, name = "Anonimus", status = "Как дела?", id, link = "/messages/" }) => {

  let photo = photoSmall ? photoSmall : photoLarge ? photoLarge : avatarDefault

  return (
    <div className="user-messages">
      <NavLink className="user-messages__img-link" to={`/profile/${id}`} >
        <img className="user-messages__img" src={photo} alt="avatar" />
      </NavLink>
      <NavLink className="user-messages__content" to={`${link}${id}`}>
        <div className="user-messages__name">
          {name}
        </div>
        <div className="user-messages__text">
          {status}
        </div>
      </NavLink>
    </div >
  );
}
