import React from 'react';
import './WindowProfile.scss';
import { IconProfile } from './IconProfile';
import { UserSettingButton } from './UserSettingButton';
import { UserName } from './UserName';
import { UserSetting } from './UserSetting';

type PropsType = {
  fullName: string | null
  isActiveWindow: boolean
  setActiveWindowToggleCallback: () => void
  setActiveWindow: (isActive: boolean) => void
}

export const WindowProfile: React.FC<PropsType> = (props) => {

  const { fullName, isActiveWindow, setActiveWindowToggleCallback, setActiveWindow } = props

  return (
    <div className='window-profile'>
      {/* name */}
      <UserName fullName={fullName} />
      {/* icon-my-profile */}
      <IconProfile />
      {/* icon-setting */}
      <UserSettingButton setActiveWindowToggleCallback={setActiveWindowToggleCallback} />
      <UserSetting isActiveWindow={isActiveWindow} setActiveWindow={setActiveWindow} />
    </div>
  );
}
