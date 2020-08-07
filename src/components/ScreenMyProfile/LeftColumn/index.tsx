import React from 'react';
import './LeftColumn.scss';
import { MainPhoto } from './MainPhoto';
import { ListFriends } from './ListFriends';
import { PhotosType } from '../../../redux/users-reducer';

type PropsType = {
  photos: PhotosType
}


export const LeftColumn: React.FC<PropsType> = ({ photos }) => {
  return (
    <div className='left-column'>
      {/* Главное фото */}
      <MainPhoto />
      {/* Список друзей */}
      <ListFriends />
    </div>
  );
}
