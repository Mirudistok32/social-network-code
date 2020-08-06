import React from 'react';
import { ScreenUsersRightColumn } from '.';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { setUsersThunk, UserType } from './../../../redux/users-reducer'


type MapStateType = {
  users: Array<UserType>
}
type MapDispatchType = {
  setUsersThunk: (currentPage: number, pageSize: number) => void
}
type OwnerType = {}

type PropsType = MapStateType & MapDispatchType & OwnerType;

const ContainerScreenUsersRightColumn: React.FC<PropsType> = ({ users, setUsersThunk }) => {

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
  connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, { setUsersThunk })
)(ContainerScreenUsersRightColumn)