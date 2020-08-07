import React from 'react';
import './Dialogs.scss';
import { NavIconLeftArrow } from './NavIconLeftArrow';
import avatarDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';
import { DialogsMessage } from './DialogsMessage';

export type DialogsType = {
  name?: string,
  avatar?: string,
  id?: string
}

export const Dialogs: React.FC<DialogsType> = ({ name = "Anonimus", avatar = avatarDefault, id}) => {
  return (
    <div className="dialogs">
      <div className="dialogs__header">
        <NavLink className="dialogs__back" to="/messages"><NavIconLeftArrow /><span>Назад</span></NavLink>
        <NavLink className="dialogs__name" to={`/profile/${id}`} >{name}</NavLink>
        <NavLink className="dialogs__avatar-link" to={`/profile/${id}`} ><img className="dialogs__avatar-img" src={avatar} alt="avatar" /></NavLink>
      </div>
      <div className="dialogs__content">
        <DialogsMessage />
      </div>
      <div className="dialogs__footer">
        <form className="dialogs__footer-form">
          <input className="dialogs__footer-input" placeholder="..."></input>
          <button className="dialogs__footer-btn">Отправить</button>
        </form>
      </div>
    </div>
  );
}
