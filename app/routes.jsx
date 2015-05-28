'use strict';

// disable `no-unused-vars` rule
/* eslint no-unused-vars: 0 */

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import App from './components/app.jsx!';
import Users from './components/users.jsx!';
import NotFound from './pages/not-found.jsx!';

export default (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute
      name='users'
      handler={Users} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);
