import React from 'react';
import './IconProfile.scss';
import iconProfileDefault from '../../../../assets/images/default-icon.jpg'
import { NavLink } from 'react-router-dom';
import { PhotosType } from '../../../../redux/users-reducer';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/store';

export type IconProfileType = {
  photos: PhotosType
}
export const IconProfile: React.FC<IconProfileType> = (props) => {

  const id = useSelector((state: AppStateType) => state.authReducer.id) 

  const { photos } = props

  let photoURL = photos.small ? photos.small : photos.large ? photos.large : iconProfileDefault

  return (
    <NavLink to={`/profile/${id}`} className="icon-profile" >
      <img src={photoURL} alt="" />
    </NavLink>
  );
}
