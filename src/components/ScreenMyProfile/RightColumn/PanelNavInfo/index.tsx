import React from 'react';
import './PanelNavInfo.scss';
import { PanelNavInfoElement } from './PanelNavInfoElement';

export type PanelNavInfoType = {
  count?: number
}

export const PanelNavInfo: React.FC<PanelNavInfoType> = (props) => {

  const { count = 1000 } = props

  return (
    <div className="panelnav-info">
      <ul className="panelnav-info__list">
        {/* максимально предусмотрено только 6 элементов, не больше */}
        <PanelNavInfoElement count={count} />
      </ul>
    </div>
  );
}
