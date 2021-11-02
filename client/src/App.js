import './App.css';
import React from 'react';
import { Router, navigate } from '@reach/router';
import './App.css';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import Update from './views/Update';


function App() {
  // navigate(`/authors`);
  return (
    <div className="App">
      <Router>
        <Main path='/authors' />
        <AddAuthor path='/authors/add' />
        <Update path="/authors/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
