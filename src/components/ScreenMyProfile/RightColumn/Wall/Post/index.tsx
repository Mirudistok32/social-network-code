import React from 'react';
import './Post.scss';
import defaultAvatar from '../../../../../assets/images/default-icon.jpg'
import { DeleteSVG } from './DeleteSVG'
import { NavLink } from 'react-router-dom';


export type PostType = {
  avatar?: string,
  name?: string,
  link?: string,
  text?: string,
  id?: string
}

export const Post: React.FC<PostType> = ({
  avatar = defaultAvatar,
  name = "Anonimus",
  link = "/",
  text = 'Успех приходит лишь к тем, кто не боится столкнуться с трудностями и пожертвовать своими благами. Джеймс Аллен',
  id }) => {


  return (
    <div className="post">
      <div className="post__user">
        <div className="post__user-box">
          <NavLink className="post__user-img" to={`/profile/${id}`}>
            <img src={defaultAvatar} alt="" />
          </NavLink>
          <div className="post__user-info">
            <NavLink to={`/profile/${id}`} className="post__user-name">{name}</NavLink>
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
