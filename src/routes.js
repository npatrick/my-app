import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.js';
import Navigation from './components/navigation.js';
import Home from './components/home.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

export default (
  <Route path="/" component={App} >
    <IndexRoute components={ {main: Home, navigation: Navigation, footer: Footer } } />
    <Route path="/portfolio" components={ {main: Portfolio, navigation: Navigation, footer: Footer} } />
    <Route path="/contact" components={ {main: Contact, navigation: Navigation, footer: Footer} } />
  </Route>
);