import React, { useEffect } from 'react';
import { ScreenUsersRightColumn } from '.';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { setUsersThunk, actions, UserType, followThunk, unfollowThunk } from './../../../redux/users-reducer'


type MapStateType = {
  users: Array<UserType>
  totalUsersCount: number
  currentPage: number
  pageSize: number
  isPreloading: boolean
  isFetching: boolean
}
type MapDispatchType = {
  setUsersThunk: (currentPage: number, pageSize: number) => void
  setCurrentPage: (currentPage: number) => void
  followThunk: (id: number) => void
  unfollowThunk: (id: number) => void
}
type OwnerType = {}

type PropsType = MapStateType & MapDispatchType & OwnerType;

const ContainerScreenUsersRightColumn: React.FC<PropsType> = (props) => {

  //Деструктуризация свойств из пропсов
  const {
    users,
    totalUsersCount,
    currentPage,
    pageSize,
    isPreloading,
    isFetching,
    setCurrentPage,
    setUsersThunk,
    followThunk,
    unfollowThunk } = props

  //Делаю запрос на сервер для получения всех users/ и устанавливаю в стейт 
  useEffect(() => {
    setUsersThunk(currentPage, pageSize)
  }, [currentPage, pageSize, setUsersThunk]) //Не понимаю, почему надо прописывать три зависимости

  const setFollow = (id: number) => {
    followThunk(id)
  }
  const setUnfollow = (id: number) => {
    unfollowThunk(id)
  }

  //Считаю количество всего страниц с пользователями
  let allPagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= allPagesCount; i++) {
    pages.push(i)
  }

  //Устанавливаю по клику, какая страница сейчас является текущей
  const onSetCurrentPage = (i: number) => {
    setCurrentPage(i)
  }

  return (
    <>
      <ScreenUsersRightColumn
        users={users}
        pages={pages}
        currentPage={currentPage}
        onSetCurrentPage={onSetCurrentPage}
        isPreloading={isPreloading}
        isFetching={isFetching}
        setFollow={setFollow}
        setUnfollow={setUnfollow} />
    </>
  );
}

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersReducer.users,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    pageSize: state.usersReducer.pageSize,
    isPreloading: state.usersReducer.isPreloading,
    isFetching: state.usersReducer.isFetching
  }
}

export default compose<React.ComponentType>(
  connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    setUsersThunk,
    setCurrentPage: actions.setCurrentPage,
    followThunk: followThunk,
    unfollowThunk: unfollowThunk
  })
)(ContainerScreenUsersRightColumn)