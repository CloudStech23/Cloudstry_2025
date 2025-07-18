import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navigators/Navbar";
import Home from "./Pages/HomePage/Home";
import { Article } from "./Pages/ArticlePage/Ariticle";
import Footer from "./Navigators/Footer";
import DigCert from "./Pages/DigitalCertPage/DigCert";
import Unversities from "./Pages/DigitalCertPage/Sub-Pages/Unversities";
import Organization from "./Pages/DigitalCertPage/Sub-Pages/Organization";
import Institute from "./Pages/DigitalCertPage/Sub-Pages/Institute";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/digital-certificate" element={<DigCert />} />
          <Route
            path="/digital-certificate/universities"
            element={<Unversities />}
          />
          <Route
            path="/digital-certificate/organizations"
            element={<Organization />}
          />
          <Route
            path="/digital-certificate/institutes"
            element={<Institute />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
