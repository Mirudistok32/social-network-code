import React from 'react';
import './ScreenUsers.scss';
import avatarDefault from '../../assets/images/default-icon.jpg'
import { ScreenMessagesLeftColumn } from '../ScreenMessages/ScreenMessagesLiftColumn';
import { ContainerScreenUsersRightColumn } from './ScreenUsersRightColumn/ContainerScreenUsersRightColumn';


export type DialogsType = {
  name?: string,
  avatar?: string,
  id?: string
}

export const ScreenUsers: React.FC<DialogsType> = ({ name = "Anonimus", avatar = avatarDefault, id = "77" }) => {
  return (
    <div className="screen-friends">
      <div className="container">
        <div className="container__box">
          <ScreenMessagesLeftColumn />
          <ContainerScreenUsersRightColumn />
        </div>
      </div>
    </div>
  );
}