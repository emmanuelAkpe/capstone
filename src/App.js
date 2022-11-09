import "./App.css";
import { Navbar } from "./components/navbar/Navbar";

import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/faq/Faq";
import ScrollToTop from "./helpers/scrollToTop";
import DriverPage from "./pages/Driver";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/driver" element={<DriverPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
