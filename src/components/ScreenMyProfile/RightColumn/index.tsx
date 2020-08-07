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
}

export const RightColumn: React.FC<IProps> = ({ fullName, contacts, userId, photos }) => {
  return (
    <div className="right-column">
      {/* Name+Status */}
      <NameStatus fullName={fullName} />
      {/* Info about user */}
      <InfoUser contacts={contacts} />
      {/* Panel info */}
      <PanelNavInfo />
      {/* What is news? */}
      <WhatNews />
      {/* Wall */}
      <Wall userId={userId} photos={photos} fullName={fullName}/>
    </div>
  );
}
