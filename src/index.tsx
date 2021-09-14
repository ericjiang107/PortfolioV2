import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home, SCPC, Pokemon, Weather, Gundam, Cat } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>

    <Router>

      <Switch>
        <Route exact path='/'>
          <Home title={"Portfolio V2"} />
        </Route>

        <Route path='/SCPC'>
          <SCPC />
        </Route>
        
        <Route path='/Pokemon'>
          <Pokemon />
        </Route>

        <Route path='/Weather'>
          <Weather />
        </Route>

        <Route path='/Gundam'>
          <Gundam />
        </Route>

        <Route path='/Cat'>
          <Cat />
        </Route>

      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
