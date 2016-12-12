import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const App = props => (
  <div>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default connect()(App);
