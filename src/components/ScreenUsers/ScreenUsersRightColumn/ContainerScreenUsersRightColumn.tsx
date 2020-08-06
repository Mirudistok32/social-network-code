import React from 'react';
import { ScreenUsersRightColumn } from '.';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { setUsersThunk, UserType } from './../../../redux/users-reducer'


type OwnerType = {}
type MapStateType = {
  users: Array<UserType>
}
type MapDispatchType = {}

type PropsType = OwnerType & MapStateType & MapDispatchType;

export const ContainerScreenUsersRightColumn: React.FC<PropsType> = ({ users }) => {

  setUsersThunk(1, 10)

  return (
    <ScreenUsersRightColumn users={users} />
  );
}

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersReducer.users
  }
}

export default compose(
  connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {})
)(ContainerScreenUsersRightColumn)