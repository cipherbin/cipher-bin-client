import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import NavigationBar from './NavigationBar/NavigationBar';
import CipherBinRead from './CipherBinRead/CipherBinRead';
import FourOhFour from './FourOhFour/FourOhFour';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = process.env.REACT_APP_CIPHER_BIN_API_BASE_URL;

ReactDOM.render(
  <Router>
    <NavigationBar />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/msg" component={CipherBinRead} exact />
      <Route component={FourOhFour} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
