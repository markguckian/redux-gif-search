import React from 'react';
import { Route } from 'react-router';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from './containers/App';
import SearchPage from './containers/SearchPage';
import GifPage from './containers/GifPage';

export default
  <Route
    path="/"
    component={App}
  >
    <IndexRoute component={SearchPage} />
    <Route
      path="/:searchTerm"
      component={GifPage}
    />
  </Route>;
