import React from 'react';
import './MainPhoto.scss';
import avatarDefault from '../../../../assets/images/octopus.svg'
import { PhotosType } from '../../../../redux/users-reducer';
import { useSelector } from 'react-redux';
import { getAuthIsAutorizationSelect } from '../../../../selects/auth-select';
// import avatarDefault from '../../assets/images/default-icon.jpg'

export type PropsType = {
  photos: PhotosType
}

export const MainPhoto: React.FC<PropsType> = (props) => {

  const { photos } = props

  const isAuth = useSelector(getAuthIsAutorizationSelect)

  let photoURL = photos.small ? photos.small : photos.large ? photos.large : avatarDefault

  return (
    <div className="main-photo main-photo__box" >
      <img className="main-photo" src={photoURL} alt="avatar" />
      {
        isAuth && (
          <label className="main-photo__change-box">Выбрать фото
            <input className="main-photo__change" type="file" />
          </label>
        )
      }
    </div>
  );
}
