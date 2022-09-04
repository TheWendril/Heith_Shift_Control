import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';

var AppStyle ={
  margin: '-1vh',
  padding: '0vw'
}

function App() {
  return (
    <div style={AppStyle}>
      <Home/>
    </div>
  );
}

export default App;
