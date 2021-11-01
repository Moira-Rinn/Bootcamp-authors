import './App.css';
import React from 'react';
import { Router, navigate } from '@reach/router';
import './App.css';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';


function App() {
  // navigate(`/authors`);
  return (
    <div className="App">
      <Router>
        <Main path='/authors' />
        <AddAuthor path='/authors/add' />
      </Router>
    </div>
  );
}

export default App;
