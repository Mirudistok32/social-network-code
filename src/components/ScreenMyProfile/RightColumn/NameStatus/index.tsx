import React from 'react';
import './NameStatus.scss';

export type NameStatusType = {
  name?: string,
  status?: string
}

export const NameStatus: React.FC<NameStatusType> = ({ name = 'Anonimus', status = "А ну быстро войди в систему!" }) => {
  return (
    <div className="name-status">
      <span className='name-status__name'>{name}</span>
      <span className='name-status__status'>{status}</span>
    </div>
  );
}
