import React from 'react';
import './ScreenUsers.scss';
// import avatarDefault from '../../assets/images/default-icon.jpg'
import { ScreenMessagesLeftColumn } from '../ScreenMessages/ScreenMessagesLiftColumn';
import ContainerScreenUsersRightColumn from './ScreenUsersRightColumn/ContainerScreenUsersRightColumn';

type PropsType = {

}

export const ScreenUsers: React.FC<PropsType> = (props) => {
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