import React from 'react';
import './ScreenMyProfile.scss';
import { VideoBackgound } from './VideoBackgound';
import { LeftColumn } from './LeftColumn';
import { RightColumn } from './RightColumn';
import { GetProfileType } from '../../api/api';

interface IProps {
  profile: GetProfileType | null
}

export const ScreenMyProfile: React.FC<IProps> = ({ profile }) => {
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
