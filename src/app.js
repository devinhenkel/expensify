import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const approot = document.getElementById('app');
ReactDOM.render(<AppRouter />, approot)
  
