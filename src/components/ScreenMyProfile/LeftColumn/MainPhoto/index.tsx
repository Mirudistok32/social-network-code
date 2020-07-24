import React from 'react';
import './MainPhoto.scss';
import avatarDefault from '../../../../assets/images/octopus.svg'
// import avatarDefault from '../../assets/images/default-icon.jpg'

export type MainPhotoType = {
  avatar?: string
}

export const MainPhoto: React.FC<MainPhotoType> = ({ avatar = avatarDefault }) => {
  return (
    <img className="main-photo" src={avatarDefault} alt="avatar" />
  );
}
