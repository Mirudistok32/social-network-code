import React from 'react';
import './App.scss';
import { ScreenMyProfile } from '../ScreenMyProfile';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { ScreenMessages } from '../ScreenMessages';


export const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch >
        <Route exact path='/' render={() => <ScreenMyProfile />} />
        {/* ScreenMessages */}
        <Route exact path='/messages/' render={() => <ScreenMessages />} />
        <Route exact path='/messages/:id' render={() => <ScreenMessages />} />
      </Switch>
    </div>
  );
}
