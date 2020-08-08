import React from 'react';
import './ListFriendsElement.scss';
import imgDefault from '../../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';

export type ListFriendsElement = {
  name?: string,
  id?: number,
  photo?: string
}

export const ListFriendsElement: React.FC<ListFriendsElement> = (props) => {

  const { name = "Anonimus", id, photo = imgDefault } = props

  return (
    <NavLink to={`/profile/${id}`} className="list-friends-element">
      <div className="list-friends-element__photo-box">
        <img className="list-friends-element__photo" src={photo} alt="" />
      </div>
      <span className="list-friends-element__name" >{name}</span>
    </NavLink>
  );
}
