import React, { useState } from 'react';
import Nav from'./components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {

  const [categories] = useState ([
    {
        name: "Projects",
        description:
        "my projects",
    },
    { 
        name: "Resume", 
        description: "my resume" 
    },
    {
        name: "Contact",
        description:
        "Contact",
    }
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      </Nav>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
