import React from 'react';
import './ListFriends.scss';
import { ListFriendsElement } from './ListFriendsElement';

export type ListFriendsType = {
  count?: number
}

export const ListFriends: React.FC<ListFriendsType> = (props) => {

  const { count = 1000 } = props

  return (
    <div className="list-friends">
      <div className="list-friends__title">
        Друзья:
        <span className="list-friends__count">{count}</span>
        <div className="list-friends__title-line"></div>
      </div>
      <div className="list-friends__elements">
        {/* ListFriendsElement (все ссылки, предусмотренно только для 6-ти элементов)*/}
        <ListFriendsElement />
        <ListFriendsElement />
        <ListFriendsElement />
        <ListFriendsElement />
        <ListFriendsElement />
        <ListFriendsElement />
      </div>
    </div>
  );
}
