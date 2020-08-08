import React, { useEffect } from 'react';
import './Header.scss';
import { Header } from '.';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { setDataMeThunk } from '../../redux/auth-reducer';


type OwnerType = {}
type MapStateType = {
  isFetching: boolean
  isAutorization: boolean
}
type MapDispatchType = {
  setDataMeThunk: () => void
}
type PropsType = MapStateType & MapDispatchType & OwnerType

const ContainerHeader: React.FC<PropsType> = (props) => {

  const { isFetching, isAutorization, setDataMeThunk } = props

  useEffect(() => {
    setDataMeThunk()
  }, [setDataMeThunk])

  return (
    <Header isFetching={isFetching} isAutorization={isAutorization} />
  );
}


const mapStateToProps = (state: AppStateType): MapStateType => ({
  isFetching: state.authReducer.isFetching,
  isAutorization: state.authReducer.isAutorization
})

export default compose<React.ComponentType>(
  connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
    setDataMeThunk
  })

)(ContainerHeader);