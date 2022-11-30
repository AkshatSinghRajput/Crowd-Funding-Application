import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserState from './Context/userState';

ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <App />
    </UserState>

  </React.StrictMode>,
  document.getElementById('root')
);