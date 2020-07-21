import React from 'react';
import './App.scss';
import { ScreenMyProfile } from '../ScreenMyProfile';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch >
        <Route path='/' render={() => <ScreenMyProfile />} />
      </Switch>
    </div>
  );
}
