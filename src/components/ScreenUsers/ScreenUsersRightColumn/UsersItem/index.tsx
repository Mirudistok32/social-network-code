import React from 'react';
import s from './UsersItem.module.scss';
import avatarDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';

export type UserMessagesType = {
  photoLarge: string | null
  photoSmall: string | null
  name: string,
  status: string,
  id: string,
  link?: string
  follow: boolean
}

export const UsersItem: React.FC<UserMessagesType> = (props) => {

  const { photoLarge, photoSmall, name = "Anonimus", status = "Как дела?", id, link = "/messages/", follow } = props

  let photo = photoSmall ? photoSmall : photoLarge ? photoLarge : avatarDefault
  let followBtn = follow ?
    <button className={s['user-messages__btn']}>Отписаться</button> :
    <button className={s['user-messages__btn']}>Подписаться</button>


  return (
    <div className={s['user-messages']}>
      <NavLink className={s['user-messages__img-link']} to={`/profile/${id}`} >
        <img className={s['user-messages__img']} src={photo} alt="avatar" />
      </NavLink>
      <NavLink className={s['user-messages__content']} to={`${link}${id}`}>
        <div className={s['user-messages__name']}>
          {name}
        </div>
        <div className={s['user-messages__text']}>
          {status}
        </div>
      </NavLink>
      {
        followBtn
      }
    </div >
  );
}
