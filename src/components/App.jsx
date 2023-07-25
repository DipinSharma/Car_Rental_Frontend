import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Routes/Home/Home.jsx"
import Navbar from './Navbar.jsx';
import About from './Routes/About/About.jsx';
import Models from './Routes/Models/Models.jsx';
import TestimonialPage from './Routes/Testimonials/TestimonialPage.jsx';
import Contact from './Routes/Contact/Contact.jsx';
import Team from './Routes/Team/Team.jsx';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/models" element={<Models />}></Route>
        <Route path="/testimonial" element={<TestimonialPage/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  );
};

export default App;
