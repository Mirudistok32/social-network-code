import React from 'react';
import './InfoUser.scss';
import { useState } from 'react'
import { GetProfileContactsType } from '../../../../api/api';

export type PropsType = {
  bithday?: string
  city?: string
  contacts: GetProfileContactsType
}

export const InfoUser: React.FC<PropsType> = React.memo((props) => {

  //Деструктуризируем свойства из пропса
  const { bithday, city, contacts } = props
  let { facebook, github, instagram, mainLink, twitter, vk, website, youtube } = contacts

  //Хук, который отвечает за открытия всей информации при нажатии на кнопку"Смотреть всю информацию"
  const [active, setActive] = useState(false);

  return (
    <div className="info-user">
      {bithday &&
        <div className="info-user__row-bithday info-user__row">
          <span>День рождения:</span>
          <span className="info-user__requestData">{bithday}</span>
        </div>
      }
      {city &&
        <div className="info-user__row-city info-user__row">
          <span>Город:</span>
          <span className="info-user__requestData">{city}</span>
        </div>
      }
      <div className="info-user__row-website info-user__row">
        <span>Сайт:</span>
        <a className="info-user__requestData info-user__link" href={`${github}`} target='_blank' rel='noopener noreferrer'>{github}</a>
      </div>
      {
        active &&
        <div className="info-user__row-info">
          {facebook &&
            <div className="info-user__row-website info-user__row">
              <span>Facebook:</span>
              <a className="info-user__requestData info-user__link" href={`${facebook}`} target='_blank' rel='noopener noreferrer'>{facebook}</a>
            </div>
          }
          {vk &&
            <div className="info-user__row-website info-user__row">
              <span>VK:</span>
              <a className="info-user__requestData info-user__link" href={`${vk}`} target='_blank' rel='noopener noreferrer'>{vk}</a>
            </div>
          }
          {instagram &&
            <div className="info-user__row-website info-user__row">
              <span>Instagram:</span>
              <a className="info-user__requestData info-user__link" href={`${instagram}`} target='_blank' rel='noopener noreferrer'>{instagram}</a>
            </div>
          }
          {twitter &&
            <div className="info-user__row-website info-user__row">
              <span>Twitter:</span>
              <a className="info-user__requestData info-user__link" href={`${twitter}`} target='_blank' rel='noopener noreferrer'>{twitter}</a>
            </div>
          }
          {youtube &&
            <div className="info-user__row-website info-user__row">
              <span>Youtube:</span>
              <a className="info-user__requestData info-user__link" href={`${youtube}`} target='_blank' rel='noopener noreferrer'>{youtube}</a>
            </div>
          }
          {mainLink &&
            <div className="info-user__row-website info-user__row">
              <span>MainLink:</span>
              <a className="info-user__requestData info-user__link" href={`${mainLink}`} target='_blank' rel='noopener noreferrer'>{mainLink}</a>
            </div>
          }
          {website &&
            <div className="info-user__row-website info-user__row">
              <span>Website:</span>
              <a className="info-user__requestData info-user__link" href={`${website}`} target='_blank' rel='noopener noreferrer'>{website}</a>
            </div>
          }
          {github &&
            <div className="info-user__row-website info-user__row">
              <span>GitHub:</span>
              <a className="info-user__requestData info-user__link" href={`${github}`} target='_blank' rel='noopener noreferrer'>{github}</a>
            </div>
          }
          <div className="info-user__row-website info-user__row-active"></div>
        </div>
      }
      <div className="info-user__bottom-line"></div>
      <span className="info-user__show-all" onClick={() => setActive(!active)}>
        Смотреть всю информацию
      </span>
    </div>
  );
})
