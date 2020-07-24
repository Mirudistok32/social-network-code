import React from 'react';
import './UserName.scss';

export type UserNameType = {
  name?: string
}

export const UserName: React.FC<UserNameType> = ({ name = "Anonimus" }) => {
  return (
    <span className="user-name">{name}</span>
  );
}
