import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import HeroSection from './components/heroSection/HeroSection.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import Provider from './context/Provider.jsx';

function App() {
  return (
    <>
      <div>
        <Provider>
          <Router>
            <Navbar />
            <div className='body'>
              <HeroSection />
              <div className='wrapper'>
                <Skills />
              </div>
              <Projects />
              <Footer />
            </div>
          </Router>
        </Provider>
      </div>
    </>
  );
}

export default App;
