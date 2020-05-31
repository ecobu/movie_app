import React from 'react';
import About from './routes/About';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import Navigator from './routes/Navigator';

function App(){

  return (
    <HashRouter>
      <Navigator/>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/about">
        <About/>
      </Route>
    </HashRouter>
  );
}

export default App;