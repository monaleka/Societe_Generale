// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AssetManagement from './components/AssetManagement';
import NetworkMonitoring from './components/NetworkMonitoring';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AssetManagement} />
          <Route path="/network" component={NetworkMonitoring} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
