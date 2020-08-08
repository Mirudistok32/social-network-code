import React from 'react';
import s from './UserSetting.module.scss';

type PropsType = {
  isActiveWindow: boolean
}

export const UserSetting: React.FC<PropsType> = (props) => {

  const { isActiveWindow } = props

  let mainStylesIconSetting = s[`icon-setting`]
  if (isActiveWindow) {
    mainStylesIconSetting += ` ${s[`icon-setting-active`]}`
  }

  return (
    <div className={mainStylesIconSetting}>
      <ul className={s[`icon-setting__list`]}>
        {/* <li className={s[`icon-setting__line`]}></li> */}
        <li className={s[`icon-setting__line`]}></li>
        <li className={s[`icon-setting__element`]}><span className={s[`icon-setting__label`]}>Выйти</span></li>
        <li className={s[`icon-setting__line`]}></li>
      </ul>
    </div>
  );
}
