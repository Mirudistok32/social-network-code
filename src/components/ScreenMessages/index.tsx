import React from 'react';
import './ScreenMessages.scss';
import { ScreenMessagesLeftColumn } from './ScreenMessagesLiftColumn';
import { ScreenMessagesRightColumn } from './ScreenMessagesRightColumn';


export const ScreenMessages = React.memo(() => {
  return (
    <div className="screen-messages">
      <div className="container">
        <div className="container__box">
          {/* ScreenMessagesLiftColumn */}
          <ScreenMessagesLeftColumn />
          {/* ScreenMessagesRightColumn */}
          <ScreenMessagesRightColumn />
        </div>
      </div>
    </div>
  );
})
