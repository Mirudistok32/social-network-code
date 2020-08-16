import React, { useEffect } from 'react';
import './WindowProfile.scss';
import { WindowProfile } from '.';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { setProfileThunk } from '../../../redux/profile-reducer';
import { GetProfileType } from '../../../api/api';
import { actionsHeaderReducer } from '../../../redux/header-reducer';
import { Loading } from '../../../utils/Loading/Loading';


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

  //Функция, которая регулирует включения и выключения окна настроек в WindowProfile(в окне профиля),
  //Прокидываю ее в пропсы до элемента кнопки 'открытия настройки'(шестиренки), от куда буду получать объект события e
  const setActiveWindowCallback = () => {
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
        !id && <Loading />
      }
      {
        id && <WindowProfile
          fullName={fullName}
          isActiveWindow={isActiveWindow}
          setActiveWindowCallback={setActiveWindowCallback}
        />
      }
    </>
  );
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
  profile: state.profileReducer.profile,
  isActiveWindow: state.headerReducer.isActiveWindow
})


export default compose<React.ComponentType>(
  connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    setProfileThunk: setProfileThunk,
    setActiveWindow: actionsHeaderReducer.setActiveWindow
  })
)(ContainerWindowProfile);