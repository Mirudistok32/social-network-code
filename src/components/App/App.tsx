import React from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Technologies } from '../Technologies/Technologies';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Technologies />
      <Footer />
    </div>
  );
}
