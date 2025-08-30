import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import BtnUpToHom from "./Components/BtnUpToHom";
import Activities from "./Components/Activities";
import BtnIconeWhatsApp from "./Components/BtnIconeWhatsApp";
import OurMessage from "./Components/OurMessage";
import Orthodontics from "./pages/articles/Orthodontics";
import DentalImplants from "./pages/articles/DentalImplants";
import Prosthodontics from "./pages/articles/Prosthodontics";
import Veneers from "./pages/articles/Veneers";
import WisdomTeeth from "./pages/articles/WisdomTeeth";
import CosmeticFillings from "./pages/articles/CosmeticFillings";
import RootCanalTherapy from "./pages/articles/RootCanalTherapy";
import NotFound from "./Components/NotFound";
import Periodontics from "./pages/articles/Periodontics";
import FullAnesthesiaImplant from "./pages/articles/FullAnesthesiaImplant";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <OurMessage />
                <Services />
                <Team />
                <Activities />
                <Contact />
                <Map />
                <BtnUpToHom />
                <BtnIconeWhatsApp />
              </>
            }
          />
          <Route path="/articles/orthodontics" element={<Orthodontics />} />
          <Route
            path="/articles/dental-implants"
            element={<DentalImplants />}
          />
          <Route path="/articles/dental-crowns" element={<Prosthodontics />} />
          <Route path="/articles/decorative-veneers" element={<Veneers />} />
          <Route path="/articles/wisdom-teeth" element={<WisdomTeeth />} />
          <Route
            path="/articles/cosmetic-fillings"
            element={<CosmeticFillings />}
          />
          <Route path="/articles/root-canal" element={<RootCanalTherapy />} />
          <Route path="/articles/gum-diseases" element={<Periodontics />} />
          <Route
            path="/articles/full-anesthesia-implant"
            element={<FullAnesthesiaImplant />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
