import React from 'react';
import './WindowProfile.scss';
import { IconProfile } from './IconProfile';
import { UserSetting } from './UserSetting';
import { UserName } from './UserName';

export const WindowProfile = () => {
  return (
    <div className='window-profile'>
      {/* name */}
      <UserName />
      {/* icon-my-profile */}
      <IconProfile />
      {/* icon-setting */}
      <UserSetting />
    </div>
  );
}
