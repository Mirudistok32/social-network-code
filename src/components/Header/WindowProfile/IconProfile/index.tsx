import React, { useEffect } from 'react';
import './IconProfile.scss';
import iconProfileDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/store';
import { setMyProfilePhotosThunk } from '../../../../redux/profile-reducer';

export type IconProfileType = {
}
export const IconProfile: React.FC<IconProfileType> = (props) => {

  //Из стейта вытаскиваем нужные нам свойства
  const id = useSelector((state: AppStateType) => state.authReducer.id)
  const photos = useSelector((state: AppStateType) => state.profileReducer.photoMyProfile)

  //Запрашиваем свой профиль, из которого вытащим свою фотку.
  useEffect(() => {
    if(id){
      setMyProfilePhotosThunk(id)
    }
  })


  //Проверка есть ли фото или нету
  let photoURL;
  if(photos){
    photoURL = photos.small ? photos.small : photos.large ? photos.large : iconProfileDefault
  } else {
    photoURL = iconProfileDefault
  }

  return (
    <NavLink to={`/profile/${id}`} className="icon-profile" >
      <img src={photoURL} alt="avatar" />
    </NavLink>
  );
}
