import React from 'react';
import './RightColumn.scss';
import { NameStatus } from '../NameStatus';
import { InfoUser } from '../InfoUser';
import { PanelNavInfo } from '../PanelNavInfo';
import { Wall } from '../Wall';
import { WhatNews } from '../WhatNews';

export const RightColumn = () => {
  return (
    <div className="right-column">
      {/* Name+Status */}
      <NameStatus />
      {/* Info about user */}
      <InfoUser />
      {/* Panel info */}
      <PanelNavInfo />
      {/* What is news? */}
      <WhatNews />
      {/* Wall */}
      <Wall />
    </div>
  );
}
