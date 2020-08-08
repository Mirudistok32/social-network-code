import React, { MouseEvent } from 'react';
import './WindowProfile.scss';
import { IconProfile } from './IconProfile';
import { UserSettingButton } from './UserSettingButton';
import { UserName } from './UserName';
import { UserSetting } from './UserSetting';
import { PhotosType } from '../../../redux/users-reducer';

type PropsType = {
  fullName: string
  photos: PhotosType
  userId: number
  activeWindow: boolean
  setActiveWindowCallback: (e: MouseEvent<HTMLSpanElement>) => void
}

export const WindowProfile: React.FC<PropsType> = (props) => {

  const { fullName, photos, userId, setActiveWindowCallback, activeWindow } = props

  return (
    <div className='window-profile'>
      {/* name */}
      <UserName fullName={fullName} />
      {/* icon-my-profile */}
      <IconProfile photos={photos} id={userId} />
      {/* icon-setting */}
      <UserSettingButton onClick={setActiveWindowCallback} />
      <UserSetting activeWindow={activeWindow} />
    </div>
  );
}
