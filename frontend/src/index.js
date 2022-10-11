import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes} from 'react-router-dom';
import App from './components/App';
import Nav from './components/Nav';
import Header from './components/Header';
import PrivateRoute from './components/utils/PrivateRoute';
import {AuthProvider} from './components/AuthContext';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Main />
);