import React, { useMemo } from 'react';
import './Wall.scss';
import { Post } from './Post';
import { PhotosType } from '../../../../redux/users-reducer';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/store';

type PropsType = {
  userId: number
  photos: PhotosType
  fullName: string
}

export const Wall: React.FC<PropsType> = React.memo((props) => {

  const { userId, photos, fullName } = props

  const posts = useSelector((state: AppStateType) => state.profileReducer.posts)

  const postsWatching = useMemo(() => posts.map(p => {
    return (
      <Post key={p.id} text={p.text} fullName={fullName} photos={photos} userId={userId} />
    )
  }), [posts, fullName, photos, userId])

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
      {
        postsWatching
      }
    </div>
  );
})
