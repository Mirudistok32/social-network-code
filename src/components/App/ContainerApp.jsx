// import React, { MouseEvent } from 'react';
// import './App.scss';
// import { App } from './App';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
// import { AppStateType } from '../../redux/store';
// import { actionsHeaderReducer } from '../../redux/header-reducer';


// type OwnerType = {}
// type MapStateType = {}
// type MapDispatchType = {
//   setActiveWindow: (isActiveWindow: boolean) => void
// }
// type PropsType = OwnerType & MapStateType & MapDispatchType


// const ContainerApp: React.FC<PropsType> = (props) => {

//   const { setActiveWindow } = props

//   const onClick = (e: MouseEvent<HTMLDivElement>) => {
//       console.log(e.currentTarget.className);
//   }

//   return (
//     <>
//       <App onClick={onClick} />
//     </>
//   );
// }

// const mapStateToProps = (state: AppStateType) => ({

// })


// export default compose<React.ComponentType>(
//   connect<MapStateType, MapDispatchType, OwnerType, AppStateType>(mapStateToProps, {
//     setActiveWindow: actionsHeaderReducer.setActiveWindow
//   })
// )(ContainerApp)