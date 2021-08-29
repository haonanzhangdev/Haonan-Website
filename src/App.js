import React, {Suspense} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Homepage from './pages/HomePage/Homepage';


function App() {
  return (
    <Router basename="/Haonan-Website">
      <Suspense>
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
