import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={() => <Login setToken={setToken} />} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={() => <div>Page Not Found</div>} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
