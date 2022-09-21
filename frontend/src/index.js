import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Nav from './components/Nav';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Header />
    <Nav />
  </React.StrictMode>
);