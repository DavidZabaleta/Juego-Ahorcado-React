import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/Main';
import Admin from './components/Admin';
import Play from './components/Play';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={()=><Main/>}></Route>
        <Route exact path="/admin" component={()=><Admin/>}></Route>
        <Route exact path="/play" component={()=><Play/>}></Route>
    </BrowserRouter>
  );
}

export default App;
