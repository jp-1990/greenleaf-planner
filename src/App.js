import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import './sass/materialize.scss';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Customers from './Pages/Customers';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Planner from './Pages/Planner';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/home' exact component={Home} />
          <Route path='/planner' exact component={Planner} />
          <Route path='/customers' exact component={Customers} />
          <Route path='/' render={() => <div>404</div>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
