import React from 'react';
import './App.css';

// Import react-router-dom
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Router basename='/portfolio'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </ Routes>
      </ Router>
    </div>
  );
}

export default App;
