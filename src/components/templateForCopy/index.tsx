import React from 'react';
import './ListFriends.scss';

export type ListFriendsType = {
  count?: number
}

export const ListFriends: React.FC<ListFriendsType> = ({ count = 1000 }) => {
  return (
    <div className="list-friends">
      <div className="list-friends__title">
        Друзья:
        <span className="list-friends__count">{count}</span>
        <div className="list-friends__title-line"></div>
      </div>
      <div className="list-friends__elements">
        {/* ListFriendsElement (all link)*/}

      </div>
    </div>
  );
}
