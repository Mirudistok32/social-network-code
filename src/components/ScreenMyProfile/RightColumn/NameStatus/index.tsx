import React, { useState, useEffect } from 'react';
import './NameStatus.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../../../redux/store';
import { setProfileStatusThunk } from '../../../../redux/profile-reducer';

export type NameStatusType = {
  fullName: string,
  status: string
  userId: number
}

export const NameStatus: React.FC<NameStatusType> = (props) => {

  //Достаем свойства из пропсов
  const { fullName, userId } = props

  //Достаем свойства из стейта
  const myId = useSelector((state: AppStateType) => state.authReducer.id)
  const status = useSelector((state: AppStateType) => state.profileReducer.status)

  //Хук для диспатча
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(setProfileStatusThunk())
  }, [])

  //Хук, который будет регулировать появления поля редактирования статуса
  const [active, setActive] = useState<boolean>(true)


  //Функция, которая делает видимость поля ввода активным(Показывает нам его)
  const setActiveHandler = () => {
    setActive(false)
  }

  //Функция, которая делает видимость поля ввода неактивным(Скрывает от нас его)
  const setNotActiveHandler = () => {
    setActive(true)
  }

  //Взависимости от срабатывания события onDoubleClick или onBlur, поля редактирования будет появляться или исчезать
  let myStatus = active ?
    <span className='name-info__status-my' onDoubleClick={setActiveHandler}>{status}</span> :
    <input type="text" onBlur={setNotActiveHandler} autoFocus />

  //jsx разметка, показывающая статус пользователя
  let userStatus = <span className='name-info__status-user'>{status}</span>

  //Код, который в конечном итоге будет отображаться
  let watchingStatus = userId === myId ? myStatus : userStatus


  return (
    <div className="name-info">
      <span className='name-info__name'>{fullName}</span>
      {
        watchingStatus
      }
    </div>
  );
}
