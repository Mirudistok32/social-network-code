import React from 'react';
import './Post.scss';
import defaultAvatar from '../../../../../assets/images/default-icon.jpg'
import { DeleteSVG } from './DeleteSVG'


export type PostType = {
  avatar?: string,
  name?: string,
  link?: string,
  text?: string
}

export const Post: React.FC<PostType> = ({
  avatar = defaultAvatar,
  name = "Anonimus",
  link = "/",
  text = 'Успех приходит лишь к тем, кто не боится столкнуться с трудностями и пожертвовать своими благами. Джеймс Аллен' }) => {


  return (
    <div className="post">
      <div className="post__user">
        <div className="post__user-box">
          <a className="post__user-img" href={link}>
            <img src={defaultAvatar} alt="" />
          </a>
          <div className="post__user-info">
            <a href={link} className="post__user-name">{name}</a>
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
