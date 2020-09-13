import React from 'react';
import './LeftColumn.scss';
import { MainPhoto } from './MainPhoto';
import { ListFriends } from './ListFriends';

type PropsType = {
  
}

export const LeftColumn: React.FC<PropsType> = (props) => {

  return (
    <div className='left-column'>
      {/* Главное фото */}
      <MainPhoto  />
      {/* Список друзей */}
      <ListFriends />
    </div>
  );
}
