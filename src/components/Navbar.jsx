import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1 data-testid="home-page">
        <Link to="/">Student Portal</Link>
      </h1>
      <Link to="/student" data-testid="student-page">All Student</Link>
      <Link to="/add" data-testid="add-page">Add Student</Link>
    </nav>
  );
}

export default Navbar;
