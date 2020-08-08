import React from 'react';
import './UserName.scss';

export type UserNameType = {
  fullName: string
}

export const UserName: React.FC<UserNameType> = (props) => {

  const { fullName } = props

  return (
    <span className="user-name">{fullName}</span>
  );
}
