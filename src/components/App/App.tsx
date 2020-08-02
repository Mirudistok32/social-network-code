import React from 'react';
import './App.scss';
import { ScreenMyProfile } from '../ScreenMyProfile';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { ScreenMessages } from '../ScreenMessages';
import { ScreenFriends } from '../ScreenFriends';
import { ScreenUsers } from '../ScreenUsers';


export const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch >
        <Route exact path='/profile/:id' render={() => <ScreenMyProfile />} />
        <Route exact path='/' render={() => <ScreenMyProfile />} />
        {/* ScreenMessages */}
        <Route exact path='/messages/' render={() => <ScreenMessages />} />
        <Route exact path='/messages/:id' render={() => <ScreenMessages />} />
        <Route exact path='/friends/' render={() => <ScreenFriends />} />
        <Route exact path='/users/' render={() => <ScreenUsers />} />
      </Switch>
    </div>
  );
}
