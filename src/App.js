
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "/home/wendymackennah/Octoberprojects/petadoption/pet-adoption-website/src/Components/Header.js";
import Footer from "/home/wendymackennah/Octoberprojects/petadoption/pet-adoption-website/src/Components/Footer.js";
import Home from "/home/wendymackennah/Octoberprojects/petadoption/pet-adoption-website/src/Pages/Home.js";
import Adopt from "/home/wendymackennah/Octoberprojects/petadoption/pet-adoption-website/src/Pages/Adopt.js";
import About from "/home/wendymackennah/Octoberprojects/petadoption/pet-adoption-website/src/Pages/About.js";
import PetDetails from "/home/wendymackennah/Octoberprojects/petadoption/pet-adoption-website/src/Pages/PetDetails.js";
import Contact from "/home/wendymackennah/Octoberprojects/petadoption/pet-adoption-website/src/Pages/Contact.js"; // Ensure this import is present


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pet/:id" element={<PetDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
