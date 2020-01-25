import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomeProvider from './context/HomeContext'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <HomeProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
        <Footer/>
      </Router>
    </HomeProvider>
  );
}

export default App;
