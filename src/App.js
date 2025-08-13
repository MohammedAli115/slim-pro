
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Team from './Components/Team';
import ServicesDetails from './Components/ServicesDetails';
import Footer from './Components/Footer';
import Map from './Components/Map';
import BtnUpToHom from './Components/BtnUpToHom';
import Activities from './Components/Activities';
import BtnIconeWhatsApp from './Components/BtnIconeWhatsApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Services />
              <Team />
              <Activities />
              <Contact />
              <Map />
              <Footer />
              <BtnUpToHom />
              <BtnIconeWhatsApp />
            </>
          } />
          <Route path="/services/:id" element={<ServicesDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
