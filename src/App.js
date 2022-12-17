import React from 'react';
import * as C from './styles/app';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { MainRoutes } from './routes';
// import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <div>
        <Header />
        <C.Container>
          <MainRoutes />
        </C.Container>
        <GlobalStyle />
        {/* <Footer /> */}
      </div>
    </>
  );
};
