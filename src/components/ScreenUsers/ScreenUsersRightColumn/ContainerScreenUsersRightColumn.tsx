import React, { useEffect } from 'react';
import { ScreenUsersRightColumn } from '.';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { setUsersThunk, actions, UserType } from './../../../redux/users-reducer'


type MapStateType = {
  users: Array<UserType>
  totalUsersCount: number
  currentPage: number
  pageSize: number
}
type MapDispatchType = {
  setUsersThunk: (currentPage: number, pageSize: number) => void
  setCurrentPage: (currentPage: number) => void
}
type OwnerType = {}

type PropsType = MapStateType & MapDispatchType & OwnerType;

const ContainerScreenUsersRightColumn: React.FC<PropsType> = ({
  users,
  totalUsersCount,
  currentPage,
  pageSize,
  setUsersThunk,
  setCurrentPage }) => {

  //Делаю запрос на сервер для получения всех users/ и устанавливаю в стейт 
  useEffect(() => {
    setUsersThunk(currentPage, pageSize)
  }, [currentPage, pageSize, setUsersThunk]) //Не понимаю, почему надо прописывать три зависимости


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
    <ScreenUsersRightColumn users={users} pages={pages} currentPage={currentPage} onSetCurrentPage={onSetCurrentPage} />
  );
}

const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersReducer.users,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    pageSize: state.usersReducer.pageSize
  }
}

export default compose<React.ComponentType>(
  connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, { setUsersThunk, setCurrentPage: actions.setCurrentPage })
)(ContainerScreenUsersRightColumn)