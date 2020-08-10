import React from 'react';
import s from './UserSetting.module.scss';
import { useDispatch } from 'react-redux';
import { loginOutThunk } from '../../../../redux/auth-reducer';

type PropsType = {
  isActiveWindow: boolean
}

export const UserSetting: React.FC<PropsType> = (props) => {

  //Вытаскиваем диспатч из библиотеки react-redux
  const dispatch = useDispatch();

  //Наша функция для запроса на сервер, в ней происходит диспатч нашей санки
  const loginOut = () => {
    dispatch(loginOutThunk())
  }

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
        <li className={s[`icon-setting__element`]} onClick={loginOut} ><span className={s[`icon-setting__label`]}>Выйти</span></li>
        <li className={s[`icon-setting__line`]}></li>
      </ul>
    </div>
  );
}
