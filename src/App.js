import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/pics/Style/back.jpg';



function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Showcase of some of my work',
    },
    { 
      name: 'Resume', 
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Header></Header>
            <Projects currentCategory={currentCategory}></Projects>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
