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

  //lookingForAJob, lookingForAJobDescription no use
  let { photos, fullName, contacts, userId } = profile

  return (
    <div className="screen-my-profile">
      <VideoBackgound />
      <div className="container">
        {/* Левая колонка */}
        <LeftColumn photos={photos} />
        <RightColumn fullName={fullName} contacts={contacts} userId={userId} photos={photos}/>
        {/* Правая колонка */}
      </div>
    </div>
  );
}
