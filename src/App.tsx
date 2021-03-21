import React from 'react';
import './App.css';
import Navbar from './parts/components/navbar/Navbar'
import NotesGrid from './components/note/NotesGrid'

function App(): any {
  return (
    <div className="App">
      <Navbar title="A simple to-do list application"/>
      <NotesGrid />
    </div>
  );
}

export default App;
