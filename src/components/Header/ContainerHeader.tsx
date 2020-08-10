import React from 'react';
import './Header.scss';
import { Header } from '.';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';


type OwnerType = {}
type MapStateType = {
  isFetching: boolean
  isAutorization: boolean
}
type MapDispatchType = {
}
type PropsType = MapStateType & MapDispatchType & OwnerType

const ContainerHeader: React.FC<PropsType> = (props) => {

  const { isFetching, isAutorization } = props

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
    
  })

)(ContainerHeader);