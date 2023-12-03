import React, { useEffect } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import Home from "./pages/Home";
import Service from "./pages/Service";
import Blog from './pages/Blog';
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contact";
import Benar from "./component/Benar";
import Privacy from "./pages/Privacy_Policy";

function App() {

  const location = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms_conditions" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
