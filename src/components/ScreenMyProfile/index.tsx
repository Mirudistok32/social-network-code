import React from 'react';
import './ScreenMyProfile.scss';
import { VideoBackgound } from './VideoBackgound';
import { LeftColumn } from './LeftColumn';
import { RightColumn } from './RightColumn';
// import { GetProfileContactsType } from '../../api/api';
// import { PhotosType } from '../../redux/users-reducer';

export const ScreenMyProfile = () => {
  return (
    <div className="screen-my-profile">
      <VideoBackgound />
      <div className="container">
        {/* Левая колонка */}
        <LeftColumn />
        <RightColumn />
        {/* Правая колонка */}
      </div>
    </div>
  );
}
