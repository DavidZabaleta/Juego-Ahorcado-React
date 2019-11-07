import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/Main';
import Admin from './components/Admin';
import Play from './components/Play';
import { SLASH, PATH_ADMIN, PATH_PLAY } from './utils/Constants';

function App() {
  return (
    <BrowserRouter>
        <Route exact path={SLASH} component={()=><Main/>}></Route>
        <Route exact path={PATH_ADMIN} component={()=><Admin/>}></Route>
        <Route exact path={PATH_PLAY} component={()=><Play/>}></Route>
    </BrowserRouter>
  );
}

export default App;
