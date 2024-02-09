import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
      <ScrollButton/>
      <SocialLinks />
    </div>
  );
}

export default App;
