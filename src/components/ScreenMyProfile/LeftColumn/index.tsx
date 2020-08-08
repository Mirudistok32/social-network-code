import React from 'react';
import './LeftColumn.scss';
import { MainPhoto } from './MainPhoto';
import { ListFriends } from './ListFriends';
import { PhotosType } from '../../../redux/users-reducer';

type PropsType = {
  photos: PhotosType
}


export const LeftColumn: React.FC<PropsType> = (props) => {

  const { photos } = props

  return (
    <div className='left-column'>
      {/* Главное фото */}
      <MainPhoto photos={photos} />
      {/* Список друзей */}
      <ListFriends />
    </div>
  );
}
