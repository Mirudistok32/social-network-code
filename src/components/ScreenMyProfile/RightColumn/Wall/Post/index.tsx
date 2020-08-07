import React from 'react';
import './Post.scss';
import defaultAvatar from '../../../../../assets/images/default-icon.jpg'
import { DeleteSVG } from './DeleteSVG'
import { NavLink } from 'react-router-dom';
import { PhotosType } from '../../../../../redux/users-reducer';


export type PostType = {
  photos: PhotosType
  fullName: string,
  text?: string,
  userId: number
}

export const Post: React.FC<PostType> = ({
  photos,
  fullName = "Anonimus",
  text = 'Успех приходит лишь к тем, кто не боится столкнуться с трудностями и пожертвовать своими благами. Джеймс Аллен',
  userId }) => {

  let photoURL = photos.small ? photos.small : photos.large ? photos.large : defaultAvatar

  return (
    <div className="post">
      <div className="post__user">
        <div className="post__user-box">
          <NavLink className="post__user-img" to={`/profile/${userId}`}>
            <img src={photoURL} alt="" />
          </NavLink>
          <div className="post__user-info">
            <NavLink to={`/profile/${userId}`} className="post__user-name">{fullName}</NavLink>
          </div>
        </div>
        <div className="post__user-delete">
          <DeleteSVG />
        </div>
      </div>
      <div className="post__content">
        <div className="post__content-messages">{text}</div>
      </div>
    </div>
  );
}
