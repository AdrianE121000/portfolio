import Navbar from './components/navbar/Navbar.jsx';
import HeroSection from './components/heroSection/HeroSection.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import Provider from './context/Provider.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  return (
    <>
      <Provider>
        <Navbar />
        <div className='body'>
          <HeroSection />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;
