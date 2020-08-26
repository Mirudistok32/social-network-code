import React, { useEffect } from 'react';
import './WindowProfile.scss';
import { WindowProfile } from '.';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { setProfileThunk } from '../../../redux/profile-reducer';
import { GetProfileType } from '../../../api/api';
import { actionsHeaderReducer } from '../../../redux/header-reducer';
import { getProfileDataSelect } from '../../../selectors/profile-select';
import { getIsActiveWindowSelect } from '../../../selectors/header-select';


type OwnerType = {}
type MapStateType = {
  profile: GetProfileType | null
  isActiveWindow: boolean
}
type MapDispatchType = {
  setProfileThunk: (id: number) => void
  setActiveWindow: (isActiveWindow: boolean) => void
}
type PropsType = OwnerType & MapDispatchType & MapStateType

const ContainerWindowProfile: React.FC<PropsType> = (props) => {

  //Деструктуризация из пропсов
  const {  isActiveWindow, setProfileThunk, setActiveWindow } = props

  let fullName = useSelector((state: AppStateType) => state.authReducer.login)
  let id = useSelector((state: AppStateType) => state.authReducer.id)
  let isAuth = useSelector((state: AppStateType) => state.authReducer.isAutorization)

  //Функция, которая регулирует включения и выключения окна настроек в WindowProfile(в окне профиля),
  //Прокидываю ее в пропсы до элемента кнопки 'открытия настройки'(шестиренки), от куда буду получать объект события (e)
  const setActiveWindowToggleCallback = () => {
    setActiveWindow(!isActiveWindow)
  }

  //Запрашиваб свой профиль
  useEffect(() => {
    if (id) {
      setProfileThunk(id)
    }
  }, [setProfileThunk, id])


  return (
    <>
      {
        isAuth && <WindowProfile
          fullName={fullName}
          isActiveWindow={isActiveWindow}
          setActiveWindowToggleCallback={setActiveWindowToggleCallback}
          setActiveWindow={setActiveWindow}
        />
      }
    </>
  );
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
  profile: getProfileDataSelect(state),
  isActiveWindow: getIsActiveWindowSelect(state)
})


export default compose<React.ComponentType>(
  connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    setProfileThunk: setProfileThunk,
    setActiveWindow: actionsHeaderReducer.setActiveWindow
  })
)(ContainerWindowProfile);