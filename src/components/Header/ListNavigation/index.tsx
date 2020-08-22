import React from 'react';
import './ListNavigation.scss';
import { NavIconMessage } from './NavIconMessage';
import { NavLink } from 'react-router-dom';


type PropsType = {

}
export const ListNavigation: React.FC<PropsType> = React.memo((props) => {

  return (
    <ul className="list-navigation">
      <li className="list-navigation__item" >
        <NavLink className="list-navigation__item-link" to="/messages" title="Страница сообщений">
          <NavIconMessage />
        </NavLink>
      </li>
    </ul>
  );
})
