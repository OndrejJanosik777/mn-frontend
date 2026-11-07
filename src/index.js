import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store/store.js';


import reportWebVitals from './reportWebVitals';
// impoting pages
import P00_PLAYGROUND from './pages/p00-playground/index.js';
import P01_WELCOME from './pages/p01-welcome/index.js';
import P02_ABOUT_ME from './pages/p02-about-me/index.js';
import P03_TERMIN_RESERVATION from './pages/p03-termin-reservation/index.js';
// importing styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<P00_PLAYGROUND />} />
        <Route path="/welcome" element={<P01_WELCOME />} />
        <Route path="/about-me" element={<P02_ABOUT_ME />} />
        <Route path="/termin-reservation" element={<P03_TERMIN_RESERVATION />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
