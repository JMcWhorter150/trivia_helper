import React from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import triviaReducer from './reducers';

import TodayInHistoryList from './containers/TodayInHistoryListContainer';

const store = createStore(triviaReducer);
window.store = store;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">

          </Route>
          <Route exact path="/today">
            <TodayInHistoryList />
          </Route>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
