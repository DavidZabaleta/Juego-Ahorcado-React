import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/Main';
import Admin from './components/Admin';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={()=><Main/>}></Route>
        <Route exact path="/admin" component={()=><Admin/>}></Route>
    </BrowserRouter>
  );
}

export default App;
