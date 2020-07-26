import React from 'react';
import './Dialogs.scss';
import { NavIconLeftArrow } from './NavIconLeftArrow';
import avatarDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';
import { DialogsMessage } from './DialogsMessage';

export type DialogsType = {
  name?: string,
  avatar?: string
}

export const Dialogs: React.FC<DialogsType> = ({ name = "Anonimus", avatar = avatarDefault }) => {
  return (
    <div className="dialogs">
      <div className="dialogs__header">
        <NavLink className="dialogs__back" to="/messages"><NavIconLeftArrow /><span>Назад</span></NavLink>
        <a className="dialogs__name" href="/">{name}</a>
        <a className="dialogs__avatar-link" href="/"><img className="dialogs__avatar-img" src={avatar} alt="avatar" /></a>
      </div>
      <div className="dialogs__content">
        <DialogsMessage />
      </div>
      <div className="dialogs__footer">
        <form className="dialogs__footer-form">
          <textarea className="dialogs__footer-input" placeholder="..."></textarea>
          <button className="dialogs__footer-btn">Отправить</button>
        </form>
      </div>
    </div>
  );
}
