import React from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import triviaReducer from './reducers';

import TodayInHistoryList from './containers/TodayInHistoryListContainer';
import SavedTriviaList from './containers/SavedTriviaListContainer';
import CurrentEventsList from './containers/CurrentEventsListContainer';
import Nav from './components/Nav';

const store = createStore(triviaReducer);
window.store = store;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">

          </Route>
          <Route path="/today" component={TodayInHistoryList} />
          <Route path="/saved" component={SavedTriviaList} />
          <Route path="/news" component={CurrentEventsList} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
