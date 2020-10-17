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
import { PrivateRoute } from './Pages/PrivateRoute';

function App() {
  return (
    <Router>
      <div className='App'>
        <AuthProvider>
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/signin' exact component={Login} />
            <PrivateRoute path='/home' exact component={Home} />
            <PrivateRoute path='/planner' exact component={Planner} />
            <PrivateRoute path='/customers' exact component={Customers} />
            <Route path='/' render={() => <div>404</div>} />
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
