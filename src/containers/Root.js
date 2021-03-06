import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';

/**
 * Component is exported for conditional usage in Root.js
 */
class Root extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
