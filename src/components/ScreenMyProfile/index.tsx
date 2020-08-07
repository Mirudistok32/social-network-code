import React from 'react';
import './ScreenMyProfile.scss';
import { VideoBackgound } from './VideoBackgound';
import { LeftColumn } from './LeftColumn';
import { RightColumn } from './RightColumn';
import { GetProfileType } from '../../api/api';

type PropsType = {
  profile: GetProfileType
}

export const ScreenMyProfile: React.FC<PropsType> = ({ profile }) => {
  return (
    <div className="screen-my-profile">
      <VideoBackgound />
      <div className="container">
        {/* Левая колонка */}
        <LeftColumn photos={profile.photos} />
        <RightColumn />
        {/* Правая колонка */}
      </div>
    </div>
  );
}
