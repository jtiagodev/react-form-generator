
import './utils/wdyr';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import customTheme from "./customTheme";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as R from 'ramda';

const defaultMuiTheme = createMuiTheme();
const mergedTheme = R.merge(customTheme, defaultMuiTheme);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
