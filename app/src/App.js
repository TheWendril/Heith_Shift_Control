import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import Game from './Components/Game';
import { Switch } from '@mui/material';

var AppStyle ={
  margin: '-1vh',
  padding: '0vw'
}

function App() {
  return (
    <div style={AppStyle}>
      <Router>      
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/Game' element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
