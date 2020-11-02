import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import './sass/materialize.scss';
import { AuthProvider } from './Context/AuthContext';
import Footer from './Components/Footer/Footer';
import Customers from './Pages/Customers';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Planner from './Pages/Planner';
import Login from './Pages/Login';
import ResetToTop from './Components/ResetToTop/ResetToTop';
import { Level1AuthRoute } from './Pages/Level1AuthRoutes';
import { Level2AuthRoute } from './Pages/Level2AuthRoutes';

function App() {
  return (
    <Router>
      <ResetToTop />
      <div className='App'>
        <AuthProvider>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/signin' exact component={Login} />
            <Level1AuthRoute path='/home' exact component={Home} />
            <Level2AuthRoute path='/planner' exact component={Planner} />
            <Level2AuthRoute path='/customers' exact component={Customers} />
            <Route path='/' render={() => <div>404</div>} />
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
