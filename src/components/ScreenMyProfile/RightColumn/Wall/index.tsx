import React from 'react';
import './Wall.scss';
import { Post } from './Post';
import { PhotosType } from '../../../../redux/users-reducer';

type PropsType = {
  userId: number
  photos: PhotosType
  fullName: string
}

export const Wall: React.FC<PropsType> = ({ userId, photos, fullName }) => {
  return (
    <div className="wall">
      {/* WallList */}
      <div className="wall__list-box">
        <ul className="wall__list">
          <li className="wall__list-element">
            <button className="wall__list-btn">Мои посты</button>
          </li>
        </ul>
      </div>
      {/* Если нет постов, то в плане выводить надпись, что их нет */}
      {/* Post */}
      <Post userId={userId} photos={photos} fullName={fullName} />
    </div>
  );
}
