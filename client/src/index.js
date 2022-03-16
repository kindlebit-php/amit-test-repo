import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import env from "react-dotenv";

const root = document.getElementById('root');

window.app = ReactDOM.render(
  <BrowserRouter ><App/></BrowserRouter>

, root);