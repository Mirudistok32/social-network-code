import React from 'react';
import './PanelNavInfoElement.scss';
import { PanelNavInfoType } from '..';
import { NavLink } from 'react-router-dom';

export const PanelNavInfoElement: React.FC<PanelNavInfoType> = React.memo((props) => {

  const { count } = props
  return (
    <li className="panelnav-info-element__item">
      <NavLink to="/friends/">
        <span>{count}</span>
        <span>Друзья</span>
      </NavLink>
    </li>
  );
})
