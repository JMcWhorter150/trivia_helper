import React from 'react';
import './App.css';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import triviaReducer from './reducers';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import TodayInHistoryList from './containers/TodayInHistoryListContainer';
import SavedTriviaList from './containers/SavedTriviaListContainer';
import CurrentEventsList from './containers/CurrentEventsListContainer';
import Nav from './components/Nav';
import Home from './containers/HomeContainer';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(triviaReducer, composeEnhancer(applyMiddleware(ReduxThunk)));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/today" component={TodayInHistoryList} />
          <Route path="/saved" component={SavedTriviaList} />
          <Route path="/news" component={CurrentEventsList} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
