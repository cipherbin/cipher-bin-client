import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import CipherBinRead from './components/CipherBinRead/CipherBinRead';
import FourOhFour from './components/FourOhFour/FourOhFour';
import HowItWorks from './components/HowItWorks/HowItWorks';
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
      <Route path="/how-it-works" component={HowItWorks} exact />
      <Route component={FourOhFour} />
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root'),
);

serviceWorker.unregister();
