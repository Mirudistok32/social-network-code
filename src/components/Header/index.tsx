import React from 'react';
import './Header.scss';
import { Logo } from './Logo/Logo';
import { ListNavigation } from './ListNavigation';
import { Login } from './Login/Login';
import ContainerWindowProfile from './WindowProfile/ContainerWindowProfile';


type PropsType = {
  isFetching: boolean
  isAutorization: boolean
}

export const Header: React.FC<PropsType> = (props) => {

  const { isAutorization } = props

  let autorizationTrue = isAutorization && <>
    <Logo />
    <ListNavigation />
    <ContainerWindowProfile />
  </>
  let autorizationFalse = !isAutorization && <Login />

  return (
    <div className="header">
      <div className="container">
        <div className="header__box">
          {
            autorizationTrue
          }
        </div>
        {
          autorizationFalse
        }
      </div>
    </div>
  );
}
