import React from 'react';
import './RightColumn.scss';
import { NameStatus } from './NameStatus';
import { InfoUser } from './InfoUser';
import { PanelNavInfo } from './PanelNavInfo';
import { Wall } from './Wall';
import { WhatNews } from './WhatNews';
import { GetProfileContactsType } from '../../../api/api';
import { PhotosType } from '../../../redux/users-reducer';

interface IProps {
  fullName: string
  contacts: GetProfileContactsType
  userId: number
  photos: PhotosType
  status: string
  aboutMe: string
  lookingForAJobDescription: string
}

export const RightColumn: React.FC<IProps> = React.memo((props) => {

  //Деструктуризируем свойства из пропса
  const { fullName, contacts, userId, photos, status, aboutMe, lookingForAJobDescription } = props

  return (
    <div className="right-column">
      {/* Name+Status */}
      <NameStatus fullName={fullName} status={status} userId={userId} />
      {/* Info about user */}
      <InfoUser contacts={contacts} aboutMe={aboutMe} lookingForAJobDescription={lookingForAJobDescription}/>
      {/* Panel info */}
      <PanelNavInfo />
      {/* What is news? */}
      <WhatNews />
      {/* Wall */}
      <Wall userId={userId} photos={photos} fullName={fullName} />
    </div>
  );
})
