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

  let { photos, fullName, contacts, lookingForAJob, lookingForAJobDescription, userId } = profile

  return (
    <div className="screen-my-profile">
      <VideoBackgound />
      <div className="container">
        {/* Левая колонка */}
        <LeftColumn photos={photos} />
        <RightColumn fullName={fullName} contacts={contacts} userId={userId}/>
        {/* Правая колонка */}
      </div>
    </div>
  );
}
