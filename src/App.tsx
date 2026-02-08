import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SoftBackdrop from "./components/SoftBackdrop";
import Footer from "./components/Footer";
import LenisScroll from "./components/lenis";
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import CTA from "./components/CTA";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/faq" element={<Faq />} /> */}
        <Route path="/cat" element={<CTA />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
