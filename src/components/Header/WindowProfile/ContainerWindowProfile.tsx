import React, { useEffect } from 'react';
import './WindowProfile.scss';
import { WindowProfile } from '.';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { setProfileThunk } from '../../../redux/profile-reducer';
import { GetProfileType } from '../../../api/api';
import defaultPhoto from '../../../assets/images/default-icon.jpg';
import { actionsHeaderReducer } from '../../../redux/header-reducer';

//Костыль
//Создаю профиль по-умолчанию, он будет стоять, пока не придет настоящий профиль с сервера
const defaultProfile: GetProfileType = {
  fullName: '',
  lookingForAJob: false,
  lookingForAJobDescription: '',
  photos: {
    large: defaultPhoto,
    small: defaultPhoto
  },
  userId: 0,
  contacts: {
    facebook: '',
    github: '',
    instagram: '',
    mainLink: '',
    twitter: '',
    vk: '',
    website: '',
    youtube: ''
  }
}


type OwnerType = {}
type MapStateType = {
  id: number | null
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
  const { profile, isActiveWindow, setProfileThunk, setActiveWindow } = props

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


  //Нормально ли это? Или вариант выше лучше?
  let photos = profile ? profile.photos : defaultProfile.photos,
    userId = id ? id : 0;


  return (
    <WindowProfile
      photos={photos}
      fullName={fullName}
      userId={userId}
      isActiveWindow={isActiveWindow}
      setActiveWindowCallback={setActiveWindowCallback}
    />
  );
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
  id: state.authReducer.id,
  profile: state.profileReducer.profile,
  isActiveWindow: state.headerReducer.isActiveWindow
})


export default compose<React.ComponentType>(
  connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    setProfileThunk: setProfileThunk,
    setActiveWindow: actionsHeaderReducer.setActiveWindow
  })
)(ContainerWindowProfile);