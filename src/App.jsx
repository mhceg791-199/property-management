import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Layout from "./Layout";
import About from "./pages/about/about";
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton";
import Services from "./pages/Services/Services";
import Career from "./pages/Career/Career";
import ContactUs from "./pages/ContactUs/ContactUs";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="career" element={<Career />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="terms" element={<Terms />} />
                <Route path="privacy" element={<Privacy />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;