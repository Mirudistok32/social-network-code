import React from 'react';
import './WhatNews.scss';

export const WhatNews = React.memo(() => {
  return (
    <div className="what-news">
      <div className="what-news__input-box">
        <input className="what-news__input" type="text" placeholder="Что нового?" />
      </div>
      <div className="what-news__buttons">
        <button className="what-news__btn-send">Отправить</button>
      </div>
    </div>
  );
})
