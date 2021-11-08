import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import menubar from './menubar';





ReactDOM.render(
  <>
  <App />
 
  {/* <Tabs /> */}
  <Header />
  </>,
  document.getElementById('root')
);

