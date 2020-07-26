import React from 'react';
import './IconProfile.scss';
import iconProfileDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';

export type IconProfileType = {
  icon?: string,
  id?: string
}
export const IconProfile: React.FC<IconProfileType> = ({ icon, id = "1000" }) => {
  return (
    <NavLink to={`/profile/${id}`} className="icon-profile" >
      <img src={icon ? icon : iconProfileDefault} alt="" />
    </NavLink>
  );
}
