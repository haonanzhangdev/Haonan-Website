import './App.css';
import React, {Suspense} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Main from './layouts';
// import {withRouter, Switch, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Homepage from './pages/HomePage/Homepage';
import Footer from './components/Footer';


function App() {
  return (
    <Router basename="/Haonan-Website">
      <Suspense fallback={<Main />}>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Resume" exact component={Resume}/>
          <Route path="/Projects" exact component={Projects}/>
          <Route path="/Contact" exact component={Contact}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
