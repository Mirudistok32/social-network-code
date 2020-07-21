import React from 'react';
import './LeftColumn.scss';
import { MainPhoto } from '../MainPhoto';
import { ListFriends } from '../ListFriends';

export const LeftColumn = () => {
  return (
    <div className='left-column'>
      {/* Главное фото */}
      <MainPhoto />
      {/* Список друзей */}
      <ListFriends />
    </div>
  );
}
