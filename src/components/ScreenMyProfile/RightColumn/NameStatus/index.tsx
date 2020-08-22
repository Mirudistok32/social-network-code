import React, { useState, ChangeEvent } from 'react';
import './NameStatus.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from '../../../../redux/store';
import { setProfileStatusThunk } from '../../../../redux/profile-reducer';

export type NameStatusType = {
  fullName: string,
  status: string
  userId: number
}

export const NameStatus: React.FC<NameStatusType> = React.memo((props) => {

  //Достаем свойства из пропсов
  const { fullName, userId } = props

  //Достаем свойства из стейта
  const myId = useSelector((state: AppStateType) => state.authReducer.id)
  const status = useSelector((state: AppStateType) => state.profileReducer.status)

  //Хук для диспатча
  const dispatch = useDispatch()


  //Хук, который будет регулировать появления поля редактирования статуса
  const [active, setActive] = useState<boolean>(true)
  //Хук, который контролирует наше поле ввода
  const [valueInput, setValueInput] = useState<string>('')

  //Функция, которая делает видимость поля ввода активным(Показывает нам его)
  const setActiveHandler = () => {
    setActive(false)
    //Устанавливаем локальный стейт, свойством(статусом), которое придет их пропсов, а точнее с сервера 
    setValueInput(status)
  }

  //Функция, которая делает видимость поля ввода неактивным(Скрывает от нас его)
  const setNotActiveHandler = () => {
    setActive(true)

    //Вызываем нашу санку, которая делает put запрос на сервер, и которая отправляет наше значение нар север, для изменения статуса.
    //Обязательно диспатчим
    //Значение вытаскиваем из локального стейта, (valueInput)

    //Использую условия, для подтверждения изменения статуса
    //Блокируем eslint, чтобы confirm работал
    // eslint-disable-next-line no-restricted-globals
    let t = confirm("Вы точно хотите изменить статус?")
    if(t){
      dispatch(setProfileStatusThunk(valueInput))
    }
  }

  //Функция, которая будет, срабатывать кадый раз, когда происходят изменения в value нашего импута(поля ввода)
  //В нее мы принимает объект события (e), и из него вытаскиваем текущее значения value нашего импута(поля ввода) 
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //Достаем текущее значение
    const ourCurrentValue = e.currentTarget.value

    //Записываем текущее значение в наш локальный стейт
    setValueInput(ourCurrentValue)
  }

  //Взависимости от срабатывания события onDoubleClick или onBlur, поля редактирования будет появляться или исчезать
  let myStatus = active ?
    <span className='name-info__status-my' onDoubleClick={setActiveHandler}>{status}</span> :
    <input className='name-info__input' type="text" onBlur={setNotActiveHandler} autoFocus value={valueInput} onChange={onChangeHandler} />

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
})
