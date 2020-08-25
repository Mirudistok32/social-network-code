import React, { useEffect } from 'react';
import './IconProfile.scss';
import iconProfileDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setMyProfilePhotosThunk } from '../../../../redux/profile-reducer';
import { getProfilePhotosSelect } from '../../../../selectors/profile-select';
import { getAuthIdSelect } from '../../../../selectors/auth-select';

export type IconProfileType = {
}
export const IconProfile: React.FC<IconProfileType> = React.memo((props) => {

  //Из стейта вытаскиваем нужные нам свойства
  const id = useSelector(getAuthIdSelect)
  const photos = useSelector(getProfilePhotosSelect)

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
})
