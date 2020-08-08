import React from 'react';
import './MainPhoto.scss';
import avatarDefault from '../../../../assets/images/octopus.svg'
import { PhotosType } from '../../../../redux/users-reducer';
// import avatarDefault from '../../assets/images/default-icon.jpg'

export type PropsType = {
  photos: PhotosType
}

export const MainPhoto: React.FC<PropsType> = (props) => {

  const { photos } = props

  let photoURL = photos.small ? photos.small : photos.large ? photos.large : avatarDefault

  return (
    <img className="main-photo" src={photoURL} alt="avatar" />
  );
}
