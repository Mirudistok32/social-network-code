import React, { useEffect } from 'react';
import { ScreenMyProfile } from '.';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { setProfileThunk } from '../../redux/profile-reducer'
import { GetProfileType } from '../../api/api';

type OwnerType = {}
type MapStateType = {
  profile: GetProfileType | null
}
type MapDispatchType = {
  setProfileThunk: (id: string) => void
}
// RouteComponentProps<PathParamsType> - то что подает нам роутер
type PathParamsType = {
  userId: string
}
type PropsType = OwnerType & MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>

const ContainerScreenMyProfile: React.FC<PropsType> = ({ setProfileThunk, match, profile }) => {

  // console.log(props);
  let userId = match.params.userId

  useEffect(() => {
    setProfileThunk(userId)
  }, [userId, setProfileThunk]) //Не понимаю почему две зависимости надо


  return (<ScreenMyProfile profile={profile} />);
}

const mapStateToProps = (state: AppStateType): MapStateType => {
  return {
    profile: state.profileReducer.profile
  }
}


export default compose<React.ComponentType>(
  connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    setProfileThunk
  }),
  withRouter
)(ContainerScreenMyProfile)