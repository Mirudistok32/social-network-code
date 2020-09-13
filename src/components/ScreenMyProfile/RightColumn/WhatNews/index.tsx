import React, { useState, ChangeEvent } from 'react';
import './WhatNews.scss';
import { useDispatch, useSelector } from 'react-redux';
import { actionsProfile } from '../../../../redux/profile-reducer'
import { getProfileDataSelect } from '../../../../selectors/profile-select';
import { getAuthIdSelect } from '../../../../selectors/auth-select';

export const WhatNews = React.memo(() => {

  const [value, setValue] = useState<string>('')

  const dispatch = useDispatch();
  const userId = useSelector(getProfileDataSelect).userId
  const myId = useSelector(getAuthIdSelect)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const onClickHandler = () => {
    dispatch(actionsProfile.addNewPost(value))
    setValue('')
  }

  return (
    <>
      {
        userId === myId ? (<div className="what-news">
          <div className="what-news__input-box">
            <input className="what-news__input" type="text" placeholder="Что нового?" value={value} onChange={onChangeHandler} />
          </div>
          <div className="what-news__buttons">
            <button className="what-news__btn-send" onClick={onClickHandler}>Отправить</button>
          </div>
        </div>) : <></>
      }
    </>

  );
})
