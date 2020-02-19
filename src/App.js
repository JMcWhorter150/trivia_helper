import React from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import triviaReducer from './reducers';

import TodayInHistoryList from './containers/TodayInHistoryListContainer';
import SavedTriviaList from './containers/SavedTriviaListContainer';
import RecentSportsList from './containers/RecentSportsListContainer';
import RecentMediaList from './containers/RecentMediaListContainer';
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
          <Route path="/today">
            <TodayInHistoryList />
          </Route>
          <Route path="/sports">
            <RecentSportsList />
          </Route>
          <Route path="/media">
            <RecentMediaList />
          </Route>
          <Route path="/saved">
            <SavedTriviaList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
