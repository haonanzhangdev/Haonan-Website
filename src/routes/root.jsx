import React, {Suspense} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Main from '../layouts';


const Root = () => (
    <Router  basename="/">
      <Suspense fallback={<Main />}>
        <Switch>
          <Route path="/About" exact component={About}/>
          <Route path="/Resume" exact component={Resume}/>
          <Route path="/Projects" exact component={Projects}/>
          <Route path="/Contact" exact component={Contact}/>
        </Switch>
      </Suspense>
    </Router>
  );
  
  export default Root;