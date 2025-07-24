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
import ContactUs from "./Pages/ContactUs/ContactUs";
import RequestDemo from "./Pages/DigitalCertPage/Sections/RequestDemo";
import Industries from "./Pages/Industries/Industries";
import ScrollToHashElement from "./CustomeComponents/ScrollToHashEl";
import ScrollToTop from "./CustomeComponents/ScrollToTop";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ScrollToHashElement />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital-certificate" element={<DigCert />} />
          <Route path="/industries-we-serve" element={<Industries />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/demo" element={<RequestDemo />} />
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
