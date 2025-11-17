import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurWorks from "./pages/OurWorks";
import Mercadea from "./pages/Mercadea";
import Manual from "./pages/Manual";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/mercadea" element={<Mercadea />} />
          <Route path="/mercadea/manual" element={<Manual />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
