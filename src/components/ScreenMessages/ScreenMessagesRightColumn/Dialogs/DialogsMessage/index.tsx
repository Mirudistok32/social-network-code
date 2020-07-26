import React from 'react';
import './DialogsMessage.scss';

export type DialogsMessageType = {
  text?: string
}

export const DialogsMessage: React.FC<DialogsMessageType> = ({ text = "Привет! Как дела!?" }) => {
  return (
    <div className="dialogs-message">
      {text}
    </div >
  );
}
