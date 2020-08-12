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
import { Loading } from '../../../utils/Loading/Loading';

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
  const id = useSelector((state: AppStateType) => state.authReducer.id)

  //Функция, которая регулирует включения и выключения окна настроек в WindowProfile(в окне профиля),
  //Прокидываю ее в пропсы до элемента кнопки 'открытия настройки'(шестиренки), от куда буду получать объект события e
  const setActiveWindowCallback = () => {
    // Временно поставил toggle значение 
    setActiveWindow(!isActiveWindow)
  }

  //Запрашиваю свой профиль
  useEffect(() => {
    if (id) {
      setProfileThunk(id)
    }
  }, [setProfileThunk, id])



  // //Как регулировать приход из пропсов null?
  // //Здесь я говорю, если profile не null(т.е. тот, который пришел с сервера), то закинь настоящие свойства в пропсы
  // if (profile) {
  //   const { photos, fullName, userId }: GetProfileType = profile
  //   return <WindowProfile photos={photos} fullName={fullName} userId={userId} />
  // }

  //Нормально ли это? Или вариант выше лучше?
  let photos = profile ? profile.photos : defaultProfile.photos,
    fullName = profile ? profile.fullName : defaultProfile.fullName


  return (
    <>
      {
        !id && <Loading />
      }
      {
        id && <WindowProfile
          photos={photos}
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