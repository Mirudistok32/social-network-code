import React from 'react';
import './IconProfile.scss';
import iconProfileDefault from '../../../../assets/images/default-icon.jpg'

export type IconProfileType = {
  icon?: string
}
export const IconProfile: React.FC<IconProfileType> = ({ icon }) => {
  return (
    <a href="/" className="icon-profile" >
      <img src={icon ? icon : iconProfileDefault} alt="" />
    </a>
  );
}
