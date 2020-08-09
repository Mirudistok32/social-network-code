import React from 'react';
import s from './UsersItem.module.scss';
import avatarDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';

export type UserMessagesType = {
  photoLarge: string | null
  photoSmall: string | null
  name: string,
  status: string,
  id: number,
  link?: string
  follow: boolean
  isFetchings: Array<number>
  setFollow: (id: number) => void
  setUnfollow: (id: number) => void
}

export const UsersItem: React.FC<UserMessagesType> = (props) => {

  //Деструктуризация свойств из пропсов
  const {
    photoLarge,
    photoSmall,
    name = "Anonimus",
    status = "Как дела?",
    id,
    link = "/messages/",
    follow,
    isFetchings,
    setFollow,
    setUnfollow } = props


  //Функции подписки и отписки
  const onFollow = () => {
    setFollow(id)
  }
  const onUnfollow = () => {
    setUnfollow(id)
  }

  //Классы кнопок
  let userMessagesButton = s['user-messages__btn']
  if (isFetchings.some(i => i === id)) {
    userMessagesButton += ` ${s['user-messages__btn-disabled']}`
  }

  //Проверяем есть ли фото, а иначе ставим по дефолту
  let photo = photoSmall ? photoSmall : photoLarge ? photoLarge : avatarDefault


  //Проверяем подписанны мы на пользователя или нет.
  let followBtn = follow ?
    <button className={userMessagesButton} disabled={isFetchings.some(i => i === id)} onClick={onUnfollow}>Отписаться</button> :
    <button className={userMessagesButton} disabled={isFetchings.some(i => i === id)} onClick={onFollow}>Подписаться</button>


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
