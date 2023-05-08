import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home'
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
    return (
        <div className='App'>
            <Navbar />
            <Home />
            <About />
            <Technologies />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;