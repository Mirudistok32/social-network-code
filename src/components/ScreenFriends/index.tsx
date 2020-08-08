import React from 'react';
import './ScreenFriends.scss';
// import avatarDefault from '../../assets/images/default-icon.jpg'
import { ScreenMessagesLeftColumn } from '../ScreenMessages/ScreenMessagesLiftColumn';
import { ScreenFriendsRightColumn } from './ScreenFriendsRightColumn';


export type DialogsType = {
  name?: string,
  avatar?: string,
  id?: string
}

export const ScreenFriends: React.FC<DialogsType> = (props) => {

  // const { } = props
  
  return (
    <div className="screen-friends">
      <div className="container">
        <div className="container__box">
          <ScreenMessagesLeftColumn />
          <ScreenFriendsRightColumn />
        </div>
      </div>
    </div>
  );
}
