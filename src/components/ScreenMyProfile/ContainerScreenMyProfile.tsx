import React, { useEffect } from 'react';
import { ScreenMyProfile } from '.';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { setProfileThunk } from '../../redux/profile-reducer'
import { Loading } from '../../utils/Loading/Loading';
import { getProfileDataSelect, getProfileStatusSelect } from '../../selects/profile-select';

type OwnerType = {}
type MapStateType = ReturnType<typeof mapStateToProps>
type MapDispatchType = {
  setProfileThunk: (id: number) => void
}
// RouteComponentProps<PathParamsType> - то что подает нам роутер
type PathParamsType = {
  id: string
}
type PropsType = OwnerType & MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>

const ContainerScreenMyProfile: React.FC<PropsType> = (props) => {

  //Деструктуризируем свойства из пропс
  const { setProfileThunk, match, profile, status } = props

  let userIdOfURL = +match.params.id //Не забывать смотреть название параметров в match

  useEffect(() => {
    setProfileThunk(userIdOfURL)
  }, [userIdOfURL, setProfileThunk]) //Не понимаю почему две зависимости надо

  //Если профиля еще нет(null), то крути прелоудер(загрузку), а когда профиль придет, то отрисовывай рабочую компаненту
  let watchingComponent = !profile ? <Loading /> : <ScreenMyProfile profile={profile} status={status} />

  return (<>
    {
      watchingComponent
    }
  </>)

}

const mapStateToProps = (state: AppStateType) => {
  return {
    profile: getProfileDataSelect(state),
    status: getProfileStatusSelect(state)
  }
}


export default compose<React.ComponentType>(
  connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    setProfileThunk
  }),
  withRouter
)(ContainerScreenMyProfile)