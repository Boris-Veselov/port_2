import React from 'react';
import Nav from'./components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
