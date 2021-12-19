import React, { Fragment } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Nasa2021 from './components/pages/Projects/Nasa2021';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import GarmAqua from './components/pages/Projects/GarmAqua';
import GoodTechHack from './components/pages/Projects/GoodTechHack';
import About from './components/pages/About_Page';
import Footer from './components/Footer';
import Nasa2020 from './components/pages/Projects/Nasa2020';
import Labels from './components/pages/Projects/Labels';

function App() {
  return (
    <>
      <Router>
      <Fragment>
      <ScrollToTop/>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projekt' exact component={Projects} />
          <Route path='/om' exact component={About} />
          <Route path='/projekt/nasa2021' exact component={Nasa2021} />
          <Route path='/projekt/garmaqua' exact component={GarmAqua} />
          <Route path='/projekt/goodtechhack' exact component={GoodTechHack} />
          <Route path='/projekt/nasa2020' exact component={Nasa2020} />
          <Route path='/projekt/etiketter' exact component={Labels} />
        </Switch>
        <Footer/>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
