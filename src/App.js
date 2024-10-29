import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Routes/Home';
import Student from './Routes/Student';
import AddStudent from './Routes/AddStudent';
import EditStudent from './Routes/EditStudent';
import NotFound from './Routes/NotFound';

function App() {
  return (
    <Router>
      <Navbar /> {/* Tambahkan Navbar di sini */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddStudent} />
        <Route path="/student" component={Student} />
        <Route path="/student/:id" component={EditStudent} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
