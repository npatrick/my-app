import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.js';
import Home from './components/home.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

export default (
  <Route path="/" component={App} >
    <Route path="#" component={ Home } />
    <Route path="/portfolio" component={ Portfolio } />
    <Route path="/contact" component={ Contact } />
  </Route>
);