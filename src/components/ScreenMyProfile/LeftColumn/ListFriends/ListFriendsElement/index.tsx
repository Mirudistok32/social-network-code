import React from 'react';
import './ListFriendsElement.scss';
import imgDefault from '../../../../../assets/images/default-icon.jpg'

export type ListFriendsElement = {
  name?: string,
  id?: number,
  photo?: string
}

export const ListFriendsElement: React.FC<ListFriendsElement> = ({ name = "Anonumus", id = 13, photo = imgDefault }) => {
  return (
    <a href='/' className="list-friends-element">
      <div className="list-friends-element__photo-box">
        <img className="list-friends-element__photo" src={photo} alt="" />
      </div>
      <span className="list-friends-element__name" >{name}</span>
    </a>
  );
}