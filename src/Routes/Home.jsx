import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  return (
    <div>
      <h2>Welcome to the Student Portal</h2>
      <button 
        data-testid="student-btn" 
        onClick={() => history.push('/student')}
      >
        All Student
      </button>
    </div>
  );
}

export default Home;
