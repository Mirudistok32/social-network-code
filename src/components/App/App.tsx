import React from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContainerHeader from '../Header/ContainerHeader';
import { ScreenMessages } from '../ScreenMessages';
import { ScreenFriends } from '../ScreenFriends';
import { ScreenUsers } from '../ScreenUsers';
import ContainerScreenMyProfile from '../ScreenMyProfile/ContainerScreenMyProfile';


// type Props = {
//   onClick: (e: MouseEvent<HTMLDivElement>) => void
// }

export const App = () => {

  // const { onClick } = props

  return (
    <div className="app" >
      <ContainerHeader />
      <Switch >
        <Route exact path='/profile/:id?' render={() => <ContainerScreenMyProfile />} />
        <Route exact path='/' render={() => <div>Начальная страница</div>} />
        {/* ScreenMessages */}
        <Route exact path='/messages/' render={() => <ScreenMessages />} />
        <Route exact path='/messages/:id' render={() => <ScreenMessages />} />
        <Route exact path='/friends/' render={() => <ScreenFriends />} />
        <Route exact path='/users/' render={() => <ScreenUsers />} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}
