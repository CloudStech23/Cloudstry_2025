import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navigators/Navbar";
import Home from "./Pages/HomePage/Home";
import { Article } from "./Pages/ArticlePage/Ariticle";
import Footer from "./Navigators/Footer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
