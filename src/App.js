import './App.css';
import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Homepage from './pages/HomePage/Homepage';

function App() {
  return (
    <>
    <Navbar />
    <Homepage />
    </>
  );
}

export default App;
