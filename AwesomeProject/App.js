import React from 'react';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Navigation from './Navigation';

function mapStateToProps(state) {
  return {
    UserName: state.UserName,
    Password: state.Password,
    isUserBeingFetched: state.isUserBeingFetched,
    hasUserFetchedSuccessful: state.hasUserFetchedSuccessful,
  };
}

/*
 * For Now we don't need mapDispatchToProps because,
 * we are not yet sending functional props. To make the app in sync with all
 * pages we need mapDispatchToProps.
 */

const ReduxNavigation = connect(mapStateToProps)(Navigation);
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <ReduxNavigation />
  </Provider>
);

export default App;
