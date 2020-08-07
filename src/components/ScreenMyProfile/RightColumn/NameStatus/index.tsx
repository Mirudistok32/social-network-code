import React from 'react';
import './NameStatus.scss';

export type NameStatusType = {
  fullName: string,
  status: string
}

export const NameStatus: React.FC<NameStatusType> = ({ fullName = 'Anonimus', status }) => {
  return (
    <div className="name-status">
      <span className='name-status__name'>{fullName}</span>
      <span className='name-status__status'>{status}</span>
    </div>
  );
}
