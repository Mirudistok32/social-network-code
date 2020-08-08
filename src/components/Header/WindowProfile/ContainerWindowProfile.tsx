import React, { useEffect } from 'react';
import './WindowProfile.scss';
import { WindowProfile } from '.';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { setProfileThunk } from '../../../redux/profile-reducer';
import { GetProfileType } from '../../../api/api';
import defaultPhoto from '../../../assets/images/default-icon.jpg';

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
}
type PropsType = OwnerType & MapDispatchType & MapStateType

const ContainerWindowProfile: React.FC<PropsType> = (props) => {

  //Деструктуризация из пропсов
  const { id, profile, isActiveWindow, setProfileThunk } = props


  //Функция, которая регулирует включения и выключения окна настроек в WindowProfile(в окне профиля),
  //Прокидываю ее в пропсы до элемента кнопки 'открытия настройки'(шестиренки), от куда буду получать объект события e
  const setActiveWindowCallback = (e: any) => { }

  // Как это обойти?
  // Ведь по-умолчанию, id в state равен null
  let idd: number = Number(id)
  //Запрашиваб свой профиль
  useEffect(() => {
    setProfileThunk(idd)
  }, [setProfileThunk, idd])





  // //Как регулировать приход из пропсов null?
  // //Здесь я говорю, если profile не null(т.е. тот, который пришел с сервера), то закинь настоящие свойства в пропсы
  // if (profile) {
  //   const { photos, fullName, userId }: GetProfileType = profile
  //   return <WindowProfile photos={photos} fullName={fullName} userId={userId} />
  // }

  //Нормально ли это? Или вариант выше лучше?
  let photos = profile ? profile.photos : defaultProfile.photos,
    fullName = profile ? profile.fullName : defaultProfile.fullName,
    userId = profile ? profile.userId : defaultProfile.userId;


  return (
    <WindowProfile
      photos={photos}
      fullName={fullName}
      userId={userId}
      isActiveWindow={isActiveWindow}
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
    setProfileThunk: setProfileThunk
  })
)(ContainerWindowProfile);