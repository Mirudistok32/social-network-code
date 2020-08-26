import React from 'react';
import s from './UserSetting.module.scss';
import { useDispatch } from 'react-redux';
import { loginOutThunk } from '../../../../redux/auth-reducer';
import { NavLink } from 'react-router-dom';

type PropsType = {
  isActiveWindow: boolean
  setActiveWindow: (isActive: boolean) => void
}

export const UserSetting: React.FC<PropsType> = React.memo((props) => {

  const { setActiveWindow } = props;

  //Вытаскиваем диспатч из библиотеки react-redux
  const dispatch = useDispatch();

  //Наша функция для запроса на сервер, в ней происходит диспатч нашей санки
  const loginOut = () => {
    dispatch(loginOutThunk())
    setActiveWindow(false)
  }

  const { isActiveWindow } = props

  let mainStylesIconSetting = s[`icon-setting`]
  if (isActiveWindow) {
    mainStylesIconSetting += ` ${s[`icon-setting-active`]}`
  }

  const onClickSettingsHandler = () => {
    setActiveWindow(false)
  }

  return (
    <div className={mainStylesIconSetting}>
      <ul className={s[`icon-setting__list`]}>
        <li className={s[`icon-setting__line`]}></li>
        <li className={s[`icon-setting__line`]}></li>
        <li className={s[`icon-setting__element`]}>
          <span className={s[`icon-setting__label`]}>
            <NavLink to="/settings/profile" onClick={onClickSettingsHandler}>Настройки профиля</NavLink>
          </span>
        </li>
        <li className={s[`icon-setting__line`]}></li>
        <li className={s[`icon-setting__line`]}></li>
        <li className={s[`icon-setting__element`]} onClick={loginOut} ><span className={s[`icon-setting__label`]}>Выйти</span></li>
        <li className={s[`icon-setting__line`]}></li>
        <li className={s[`icon-setting__line`]}></li>
      </ul>
    </div>
  );
})
