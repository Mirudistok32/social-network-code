import React from 'react';
import './IconProfile.scss';
import iconProfileDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';
import { PhotosType } from '../../../../redux/users-reducer';

export type IconProfileType = {
  photos: PhotosType
  id: number
}
export const IconProfile: React.FC<IconProfileType> = (props) => {

  const { photos, id } = props

  let photoURL = photos.small ? photos.small : photos.large ? photos.large : iconProfileDefault

  return (
    <NavLink to={`/profile/${id}`} className="icon-profile" >
      <img src={photoURL} alt="" />
    </NavLink>
  );
}
