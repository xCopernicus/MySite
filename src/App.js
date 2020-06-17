import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/views/Home/Home';
import './styles/global.module.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch> 
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
