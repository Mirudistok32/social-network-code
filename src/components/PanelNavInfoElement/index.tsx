import React from 'react';
import './PanelNavInfoElement.scss';
import { PanelNavInfoType } from '../PanelNavInfo';

export const PanelNavInfoElement: React.FC<PanelNavInfoType> = ({ count }) => {
  return (
    <li className="panelnav-info-element__item">
      <a href="/">
        <span>{count}</span>
        <span>Друзья</span>
      </a>
    </li>
  );
}
