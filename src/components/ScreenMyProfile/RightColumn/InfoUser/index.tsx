import React from 'react';
import './InfoUser.scss';
import { useState } from 'react'

export type InfoUserType = {
  bithday?: string,
  city?: string,
  website?: string
}

type DefaultInfoUserType = {
  defaultBithday?: string,
  defaultCity?: string,
  defaultWebsite?: string
}

const defaultData: DefaultInfoUserType = {
  defaultBithday: '22.07.2020',
  defaultCity: 'Хогвартс',
  defaultWebsite: 'https://github.com/Mirudistok32'
}

export const InfoUser: React.FC<InfoUserType> = ({
  bithday = defaultData.defaultBithday,
  city = defaultData.defaultCity,
  website = defaultData.defaultWebsite }) => {

  const [active, setActive] = useState(false);

  return (
    <div className="info-user">
      <div className="info-user__row-bithday info-user__row">
        <span>День рождения:</span>
        <span className="info-user__requestData">{bithday}</span>
      </div>
      <div className="info-user__row-city info-user__row">
        <span>Город:</span>
        <span className="info-user__requestData">{city}</span>
      </div>
      <div className="info-user__row-website info-user__row">
        <span>Сайт:</span>
        <a className="info-user__requestData info-user__link" href={`${website}`} target='_blank' rel='noopener noreferrer'>{website}</a>
      </div>
      {
        active &&
        <div className="info-user__row-info">
          <div className="info-user__row-bithday info-user__row">
            <span>День рождения:</span>
            <span className="info-user__requestData">{bithday}</span>
          </div>
          <div className="info-user__row-city info-user__row">
            <span>Город:</span>
            <span className="info-user__requestData">{city}</span>
          </div>
          <div className="info-user__row-website info-user__row">
            <span>Сайт:</span>
            <a className="info-user__requestData info-user__link" href={`${website}`} target='_blank' rel='noopener noreferrer'>{website}</a>
          </div>
          <div className="info-user__row-website info-user__row">
            <span>Сайт:</span>
            <a className="info-user__requestData info-user__link" href={`${website}`} target='_blank' rel='noopener noreferrer'>{website}</a>
          </div>
          <div className="info-user__row-website info-user__row">
            <span>Сайт:</span>
            <a className="info-user__requestData info-user__link" href={`${website}`} target='_blank' rel='noopener noreferrer'>{website}</a>
          </div>
        </div>
      }
      <div className="info-user__bottom-line"></div>
      <span className="info-user__show-all" onClick={() => setActive(!active)}>
        Смотреть всю информацию
      </span>
    </div>
  );
}
