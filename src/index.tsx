import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import Transition from './components/transition';
import Cursor from './components/cursor';
import AppContext from './context';
import Pages from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    margin: 0;
    background-color: #fff;
  }
`;

root.render(
  <React.StrictMode>
    <AppContext>
      <GlobalStyle />
      <Cursor />
      <Transition />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </AppContext>
  </React.StrictMode>
);