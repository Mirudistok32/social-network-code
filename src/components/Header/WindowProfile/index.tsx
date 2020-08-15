import React from 'react';
import './WindowProfile.scss';
import { IconProfile } from './IconProfile';
import { UserSettingButton } from './UserSettingButton';
import { UserName } from './UserName';
import { UserSetting } from './UserSetting';
import { PhotosType } from '../../../redux/users-reducer';

type PropsType = {
  fullName: string | null
  photos: PhotosType
  isActiveWindow: boolean
  setActiveWindowCallback: () => void
}

export const WindowProfile: React.FC<PropsType> = (props) => {

  const { fullName, photos, isActiveWindow, setActiveWindowCallback } = props

  return (
    <div className='window-profile'>
      {/* name */}
      <UserName fullName={fullName} />
      {/* icon-my-profile */}
      <IconProfile photos={photos} />
      {/* icon-setting */}
      <UserSettingButton setActiveWindowCallback={setActiveWindowCallback} />
      <UserSetting isActiveWindow={isActiveWindow} />
    </div>
  );
}
