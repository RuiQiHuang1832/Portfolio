
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  document.body.style.backgroundColor = "rgb(31,32,40)";

  return (
    <div className="App" >
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
