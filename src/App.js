import React from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { MainRoutes } from './routes';

export const App = () => {
  return (
    <>
      <Header />
      <MainRoutes />
      <GlobalStyle />
    </>
  );
};
