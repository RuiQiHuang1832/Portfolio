
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  document.body.style.background = "linear-gradient(to bottom, rgb(31,32,40), rgb(0,0,0))";

  return (
    <div className="App " >
      <Navbar />
      <Home />

      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
