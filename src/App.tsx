import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
